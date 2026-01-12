import type { User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { supabase } from "@/lib/supabaseClient";
import { getUserByEmail, loginUser } from "@/services/auth/signup";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<NextAuthUser | null> {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter email and password");
        }

        const email = typeof credentials.email === "string" ? credentials.email : "";
        const password = typeof credentials.password === "string" ? credentials.password : "";

        if (!email || !password) {
          throw new Error("Please enter email and password");
        }

        const result = await loginUser({
          email,
          password,
        });

        if (!result.success || !result.user) {
          throw new Error(result.error || "Login failed");
        }

        return {
          id: result.user.id,
          email: result.user.email,
          name: result.user.name,
          image: result.user.image,
          role: result.user.role,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "select_account",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }: { user: NextAuthUser; account: { provider: string; type: string; providerAccountId: string; refresh_token?: string | null; access_token?: string | null; expires_at?: number | null; token_type?: string | null; scope?: string | null; id_token?: string | null; session_state?: string | null } | null }) {
      if (account?.provider === "google") {
        if (!user.email) return false;

        try {
          // Check if user exists
          const existingUser = await getUserByEmail(user.email);

          if (!existingUser) {
            // Create new user for Google sign-in
            const { error: insertError } = await supabase.from("users").insert([
              {
                email: user.email,
                name: user.name || "",
                image: user.image || null,
                password: "", // No password for OAuth users
                role: "USER" as const,
              },
            ]);

            if (insertError) {
              console.error("Error creating user:", insertError);
              return false;
            }
          }

          // Store account information
          const dbUser = await getUserByEmail(user.email);
          if (dbUser && account) {
            const { error: accountError } = await supabase.from("accounts").upsert([
              {
                user_id: dbUser.id,
                type: account.type,
                provider: account.provider,
                provider_account_id: account.providerAccountId,
                refresh_token: account.refresh_token || null,
                access_token: account.access_token || null,
                expires_at: account.expires_at || null,
                token_type: account.token_type || null,
                scope: account.scope || null,
                id_token: account.id_token || null,
                session_state: account.session_state || null,
              },
            ]);

            if (accountError) {
              console.error("Error storing account:", accountError);
              // Don't fail sign-in if account storage fails
            }
          }
        } catch (error) {
          console.error("Error in signIn callback:", error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user }: { token: { id?: string; role?: "USER" | "ADMIN" }; user?: NextAuthUser }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: { user: { id?: string; role?: "USER" | "ADMIN"; email?: string | null; name?: string | null; image?: string | null } }; token: { id?: string; role?: "USER" | "ADMIN" } }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
    error: "/auth/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.AUTH_SECRET,
};