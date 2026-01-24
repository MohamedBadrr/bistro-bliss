"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { UserSettings } from "@/app/profile/UserSettings";
import { UserProfile } from "@/services/user/getMe";
import { Session } from "next-auth";

interface AuthButtonProps {
  session: Session | null;
  profile: UserProfile | null;
}

const AuthButton = ({ session, profile }: AuthButtonProps) => {
  if (session) {
    return (
      <>
        <UserSettings profile={profile} />
      </>
    );
  } else
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
