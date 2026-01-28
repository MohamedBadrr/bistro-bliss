import Link from "next/link";
import Navbar from "./Navbar";
import CartButton from "./CartButton";
import Image from "next/image";
import NavBarDrawer from "./NavBarDrawer";
import { Button } from "../ui/button";
import AuthButton from "./AuthButton";
import { auth } from "@/auth";
import { getMe } from "@/services/user/getMe";

async function Header() {
  const session = await auth();
  const profile = await getMe();

  return (
    <header className=" border-b  fixed w-full bg-white z-50 border-primary  pt-5 pb-4 md:py-2">
      <div className="container flex items-center justify-between gap-6 lg:gap-10">
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

        <div className="hidden lg:block">
          <Navbar session={session} profile={profile}/>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="hidden lg:flex items-center justify-center gap-2">
            <Link href={"/reservation"}>
              <Button
                className="py-0!  text-[13px]! font-semibold font-playfair italic"
                variant={"outline"}
              >
                Book A Table
              </Button>
            </Link>

            {session ? (
              <AuthButton profile={profile} session={session} />
            ) : (
              <Link href={"/auth/login"}>
                <Button
                  className="py-0!  text-[13px]! font-semibold font-playfair italic"
                  variant={"default"}
                >
                  Login
                </Button>
              </Link>
            )}
          </div>
          <CartButton />
          <div className="block lg:hidden">
            <NavBarDrawer session={session} profile={profile} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
