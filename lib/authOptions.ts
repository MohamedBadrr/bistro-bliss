import type { User as NextAuthUser, Session } from "next-auth";
import type { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { supabase } from "@/lib/supabaseClient";
import { loginUser } from "@/services/auth/signup";

type Role = "USER" | "ADMIN";

type AppUser = NextAuthUser & {
  id: string;
  role: Role;
};

type AppToken = JWT & {
  id: string;
  role: Role;
};

type AppSession = Session & {
  user: Session["user"] & {
    id: string;
    role: Role;
  };
};

type GoogleAccount = {
  provider: string;
  type: string;
  providerAccountId: string;
  refresh_token?: string | null;
  access_token?: string | null;
  expires_at?: number | null;
  token_type?: string | null;
  scope?: string | null;
  id_token?: string | null;
  session_state?: string | null;
};

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<AppUser | null> {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter email and password");
        }

        const email = typeof credentials.email === "string" ? credentials.email : "";
        const password = typeof credentials.password === "string" ? credentials.password : "";

        const result = await loginUser({ email, password });

        if (!result.success || !result.user) {
          throw new Error(result.error || "Login failed");
        }

        return {
          id: result.user.id,
          email: result.user.email,
          name: result.user.name,
          image: result.user.image,
          role: result.user.role as Role,
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
    async signIn({
      user,
      account,
    }: {
      user: NextAuthUser;
      account: GoogleAccount | null;
    }): Promise<boolean> {
      if (account?.provider === "google") {
        const rawEmail = user.email;
        if (!rawEmail) return false;

        const email = rawEmail.toLowerCase();

        const { data: dbUser, error } = await supabase
          .from("users")
          .upsert(
            [
              {
                email,
                name: user.name || "",
                image: user.image || null,
                password: "",
                role: "USER",
              },
            ],
            { onConflict: "email" }
          )
          .select("id,email,role")
          .single();

        if (error || !dbUser) return false;

        (user as AppUser).id = dbUser.id;
        (user as AppUser).role = dbUser.role as Role;

        await supabase.from("accounts").upsert([
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
      }

      return true;
    },

    async jwt({
      token,
      user,
    }: {
      token: JWT;
      user?: NextAuthUser;
    }): Promise<AppToken> {
      const t = token as AppToken;

      if (user) {
        const u = user as AppUser;

        t.id = u.id;
        t.role = (u.role ?? "USER") as Role;
      }

      if (!t.role) t.role = "USER";
      if (!t.id && user && (user).id) t.id = (user).id;

      return t;
    },

    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<AppSession> {
      const s = session as AppSession;
      const t = token as AppToken;

      s.user.id = t.id;
      s.user.role = t.role;

      return s;
    },
  },

  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
    error: "/auth/login",
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },

  secret: process.env.AUTH_SECRET,
};
