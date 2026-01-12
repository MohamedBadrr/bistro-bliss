import { supabase } from "@/lib/supabaseClient";
import bcrypt from "bcryptjs";
import { 
  RegisterProps, 
  LoginProps, 
  AuthResult, 
  User, 
  UserWithoutPassword 
} from "@/types/auth";

// Register new user
export const signup = async ({ 
  name, 
  email, 
  password 
}: RegisterProps): Promise<AuthResult> => {
  try {
    // Check if user already exists
    const { data: existingUser } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (existingUser) {
      return {
        success: false,
        error: "User already exists with this email"
      };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          name,
          email,
          password: hashedPassword,
          role: "USER" as const,
        },
      ])
      .select()
      .single();

    if (error) {
      return {
        success: false,
        error: error.message
      };
    }

    const user = data as User;
    const { password: _, ...userWithoutPassword } = user;

    return { 
      success: true, 
      user: userWithoutPassword 
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return { 
      success: false, 
      error: errorMessage 
    };
  }
};

// Login user
export const loginUser = async ({ 
  email, 
  password 
}: LoginProps): Promise<AuthResult> => {
  try {
    // Get user by email
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    // Check if user exists - Supabase returns error when no record found
    if (error) {
      // Check if it's a "not found" error (PGRST116) or any other error
      if (error.code === "PGRST116" || error.message.includes("No rows")) {
        return {
          success: false,
          error: "Invalid email or password"
        };
      }
      return {
        success: false,
        error: "Invalid email or password"
      };
    }

    // Double check if data exists
    if (!data) {
      return {
        success: false,
        error: "Invalid email or password"
      };
    }

    const user = data as User;

    // Check if user has a password (OAuth users might have empty password)
    if (!user.password || user.password.trim() === "") {
      return {
        success: false,
        error: "Invalid email or password"
      };
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return {
        success: false,
        error: "Invalid email or password"
      };
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    return { 
      success: true, 
      user: userWithoutPassword 
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return { 
      success: false, 
      error: errorMessage 
    };
  }
};

// Get user by email (for NextAuth)
export const getUserByEmail = async (email: string): Promise<User | null> => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (error || !data) {
      return null;
    }

    return data as User;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    return null;
  }
};