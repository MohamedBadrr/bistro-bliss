import { LoginFormValues } from "@/validations/types";
import { signIn } from "next-auth/react";

export const login = async (values: LoginFormValues) => {
  const result = await signIn("credentials", {
    email: values.email,
    password: values.password,
    redirect: false,
  });

  if (!result) {
    throw new Error("Login failed. Please try again.");
  }

  if (result.error) {
    throw new Error(result.error);
  }

  if (!result.ok) {
    throw new Error("Invalid email or password");
  }

  return result;
};
