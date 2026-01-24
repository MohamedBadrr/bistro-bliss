"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "../ui/drawer";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import AuthButton from "./AuthButton";
import { UserProfile } from "@/services/user/getMe";
import { Session } from "next-auth";

interface NavBarDrawerProps {
  session: Session | null;
  profile: UserProfile | null;
}

const NavBarDrawer = ({ session, profile }: NavBarDrawerProps) => {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button className="block lg:hidden" size="icon" variant={"ghost"}>
          <Menu className="h-7! w-7! mt-2" />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="bg-white ">
        <div className="mx-auto w-full max-w-md h-[100dvh] flex flex-col">
          <DrawerHeader className="border-b border-primary">
            <Link
              href={`/`}
              className="text-[#474747] flex items-center gap-2 justify-center italic font-playfair font-semibold text-2xl"
            >
              <Image
                alt="logo image"
                src={"/logo.svg"}
                width={100}
                height={100}
                className="w-10.75! h-10.75! text-primary md:w-13.75! md:h-13.75!"
              />
              <p className="mt-2">Bistro Bliss</p>
            </Link>
          </DrawerHeader>

          {/* Content */}

          <div className="flex flex-col! overflow-y-auto p-4 ">
            <Navbar
              closeOnNavigate
              profile={profile}
              session={session as Session}
            />
            <div
              className={`flex items-center justify-center gap-2 absolute ${
                session?.user.role === "ADMIN" ? " top-125! " : " top-110! "
              }  `}
            >
              <DrawerClose asChild>
                <AuthButton profile={profile} session={session} />
              </DrawerClose>
              <DrawerClose asChild>
                <Link href={"/auth/login"}>
                  <Button
                    className="py-0!  text-[13px]! font-semibold font-playfair italic"
                    variant={"outline"}
                  >
                    Book A Table
                  </Button>
                </Link>
              </DrawerClose>
            </div>
          </div>
          {/* Footer */}
          {/* <div className="border-t p-4">
            <Button className="w-full rounded-full text-lg">Checkout</Button>
          </div> */}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default NavBarDrawer;
