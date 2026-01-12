"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { useRouter } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import InputField from "@/components/fields/InputField";
import Image from "next/image";
import Link from "next/link";
import GoogleButtonSignin from "./_components/GoogleButtonSignin";
import { useCustomMutation } from "@/hooks/useCustomMutation";
import { login } from "@/services/auth/login";
import { toast } from "sonner";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .min(8, "at least 8 characters")
    .required("Password is required"),
});

const LoginPage = () => {
  const router = useRouter();
  const { mutate, isPending } = useCustomMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success("Logged In Successfully");
      router.push("/");
      router.refresh();
    },
    onError: (error) => {
      toast.error(
        error.message === "Configuration"
          ? "Invalid email or password"
          : error.message
      );
    },
  });

  return (
    <div className="min-h-screen pt-20  flex items-center justify-center">
      <main className="w-full px-4">
        <div className="mx-auto w-full max-w-md bg-white rounded-xl shadow-lg p-6">
          <div className="text-2xl flex items-center justify-center gap-2 font-semibold text-center text-black ">
            <Image
              alt="logo image"
              src={"/logo.svg"}
              width={100}
              height={100}
              className="w-10.75! h-10.75! text-primary md:w-13.75! md:h-13.75!"
            />
            <p className="mt-2  italic font-playfair ">Bistro Bliss</p>
          </div>

          <div className="mt-6">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={mutate}
            >
              {({ isValid }) => (
                <Form className="space-y-4">
                  <div>
                    <InputField
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      labelClassName="text-[16px] font-semibold"
                    />
                  </div>

                  <div>
                    <InputField
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      labelClassName="text-[14px] font-semibold "
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={!isValid}
                    isLoading={isPending}
                  >
                    Sign in
                  </Button>

                  <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-2 text-xs text-gray-500">
                        OR
                      </span>
                    </div>
                  </div>

                  <GoogleButtonSignin />
                </Form>
              )}
            </Formik>
            <p className="mt-2 flex items-center justify-center text-sm text-black">
              <span className="">Don&apos;t have an account?</span>
              <Link
                href="/auth/signup"
                className={buttonVariants({ variant: "link", size: "sm" })}
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
