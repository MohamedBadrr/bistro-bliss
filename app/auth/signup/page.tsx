"use client";

import { Formik } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { signup } from "@/services/auth/signup";
import { useCustomMutation } from "@/hooks/useCustomMutation";
import { toast } from "sonner";
import SignUpForm from "./_components/SignUpForm";
import { buttonVariants } from "@/components/ui/button";

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .min(8, "at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const router = useRouter();

  const handleSubmitSignUp = async (values: SignUpFormValues) => {
    try {
      const result = await signup({
        name: values.name,
        email: values.email,
        password: values.password,
      });

      if (!result.success) {
        toast.error(result.error || "Sign up failed");
        return;
      }

      // Automatically sign in after successful registration
      const signInResult = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (signInResult?.error) {
        toast.error("An error occurred while Signing in.");
      } else if (signInResult?.ok) {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "An error occurred");
    }
  };

  const { mutate, isPending } = useCustomMutation({
    mutationFn: handleSubmitSignUp,
    onSuccess: () => {
      toast.success("Signup Successfully");
      router.push("/");
      router.refresh();
    },
    onError: (error) => {
      toast.error(error.message ? error.message : "An Error Occurred");
    },
  });

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center ">
      <main className="w-full px-4">
        <div className="mx-auto w-full max-w-md bg-white rounded-xl shadow-lg p-6 mt-5 mb-10">
          <div className="text-2xl flex items-center justify-center gap-2 font-semibold text-center text-black ">
            <Image
              alt="logo image"
              src={"/logo.svg"}
              width={100}
              height={100}
              className="w-10.75! h-10.75! text-primary md:w-13.75! md:h-13.75!"
            />
            <p className="mt-2 italic font-playfair">Bistro Bliss</p>
          </div>

          <div className="mt-6">
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={SignUpSchema}
              onSubmit={mutate}
            >
              {({ isValid }) => (
                <SignUpForm isPending={isPending} isValid={isValid} />
              )}
            </Formik>
            <p className="mt-2 flex items-center justify-center text-sm text-black">
              <span>Already have an account?</span>
              <Link
                href="/auth/login"
                className={buttonVariants({ variant: "link", size: "sm" })}
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
