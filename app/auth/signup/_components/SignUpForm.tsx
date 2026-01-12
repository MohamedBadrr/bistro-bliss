import InputField from "@/components/fields/InputField";
import { Button } from "@/components/ui/button";
import { Form } from "formik";
import React from "react";
import GoogleButtonSignup from "./GoogleButtonSignup";

const SignUpForm = ({
  isPending,
  isValid,
}: {
  isPending: boolean;
  isValid: boolean;
}) => {
  return (
    <Form className="space-y-4">
      <InputField
        label="Name"
        name="name"
        type="input"
        placeholder="Enter your name"
        labelClassName="text-[16px] font-semibold"
      />

      <InputField
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        labelClassName="text-[16px] font-semibold"
      />

      <InputField
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        labelClassName="text-[16px] font-semibold"
      />

      <InputField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="Confirm your password"
        labelClassName="text-[16px] font-semibold"
      />

      <Button
        type="submit"
        className="w-full"
        disabled={!isValid}
        isLoading={isPending}
      >
        {isPending ? "Signing up..." : "Sign up"}
      </Button>

      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-2 text-xs text-gray-500">OR</span>
        </div>
      </div>

      <GoogleButtonSignup />
    </Form>
  );
};

export default SignUpForm;
