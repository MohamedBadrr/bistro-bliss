"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import type { Session } from "next-auth";
import { useCustomMutation } from "@/hooks/useCustomMutation";
import { toast } from "sonner";

interface AuthButtonProps {
  session: Session | null;
}

const AuthButton = ({ session }: AuthButtonProps) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
    }
  };

  const { mutate, isPending } = useCustomMutation({
    mutationFn: handleLogout,
    onSuccess: () => {
      toast.success("Logged out Successfully");
    },
    onError: (error) => {
      toast.success(error.message ? error.message : "Error Logout");
    },
  });

  if (session) {
    return (
      <Button
        onClick={mutate}
        disabled={isPending}
        className="py-0!  text-[13px]! font-semibold font-playfair italic"
        variant={"default"}
      >
        {"Logout"}
      </Button>
    );
  }

  return (
    <Link href={"/auth/login"}>
      <Button
        className="py-0!  text-[13px]! font-semibold font-playfair italic"
        variant={"default"}
      >
        Login
      </Button>
    </Link>
  );
};

export default AuthButton;
