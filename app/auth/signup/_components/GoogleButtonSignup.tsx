"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCustomMutation } from "@/hooks/useCustomMutation";
import { toast } from "sonner";

const GoogleButtonSignup = () => {
  const handleGoogleSignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await signIn("google", {
        callbackUrl: "/",
        prompt: "select_account",
      });
    } catch (error) {
      console.error("Error signing up with Google:", error);
    }
  };

  const { mutate, isPending } = useCustomMutation({
    mutationFn: handleGoogleSignUp,
    onSuccess: () => {
      toast.success("Redirecting...");
    },
    onError: (error) => {
      toast.success(
        error.message ? error.message : "Error signing up with Google"
      );
    },
  });

  return (
    <Button
      type="button"
      variant={"outline"}
      className="w-full flex items-center justify-center gap-2"
      onClick={mutate}
      disabled={isPending}
    >
      <Image
        alt="googleSVG image"
        src={"/assets/icons/googleSVG.svg"}
        width={50}
        height={50}
        className="w-7.5! h-7.5!"
      />
      {isPending ? "Redirecting..." : "Sign up With Google"}
    </Button>
  );
};

export default GoogleButtonSignup;
