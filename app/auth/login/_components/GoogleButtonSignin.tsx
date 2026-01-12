"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCustomMutation } from "@/hooks/useCustomMutation";
import { toast } from "sonner";

const GoogleButtonSignin = () => {
  const googleLogin = async () => {
    return await signIn("google", {
      callbackUrl: "/",
      prompt: "select_account",
    });
  };
  const { mutate, isPending } = useCustomMutation({
    mutationFn: googleLogin,
    onError: () => {
      toast.error("Google Sign In Failed");
    },
    onSuccess: () => {
      toast.success("Redirecting to Google…");
    },
  });
  // const handleGoogleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   e.stopPropagation();

  //   try {
  //     setIsLoading(true);
  //     await signIn("google", {
  //       callbackUrl: "/",
  //       prompt: "select_account",
  //     });
  //   } catch (error) {
  //     console.error("Error signing in with Google:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <Button
      type="button"
      variant={"outline"}
      className="w-full flex items-center justify-center gap-2"
      onClick={mutate}
      disabled={isPending}
      isLoading={isPending}
    >
      <Image
        alt="googleSVG image"
        src={"/assets/icons/googleSVG.svg"}
        width={50}
        height={50}
        className="w-[30px]! h-[30px]!"
      />
      {isPending ? "Redirecting..." : "Sign in With Google"}
    </Button>
  );
};

export default GoogleButtonSignin;
