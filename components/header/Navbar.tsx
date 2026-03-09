"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DrawerClose } from "../ui/drawer";
import { UserProfile } from "@/services/user/getMe";
import { profile } from "console";
import { Session } from "next-auth";

type NavbarProps = {
  closeOnNavigate?: boolean;
  session: Session | null;
  profile: UserProfile | null;
};

const Navbar = ({ closeOnNavigate = false, profile, session }: NavbarProps) => {
  const pathname = usePathname();

  const Wrap = ({ children }: { children: React.ReactElement }) =>
    closeOnNavigate ? <DrawerClose asChild>{children}</DrawerClose> : children;

  return (
    <nav className="flex-1 flex justify-end">
      <motion.ul
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="fixed flex-col top-10! md:top-0 lg:static px-10 py-20 lg:p-0 flex gap-10 bg-background lg:bg-transparent transition-all duration-200 lg:flex-row w-full lg:w-auto items-start lg:items-center"
      >
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, y: -10 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Wrap>
                <Link
                  href={link.href}
                  className="relative w-fit text-base font-semibold font-playfair italic transition-all duration-300 group"
                >
                  {link.title}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </Wrap>
            </motion.li>
          );
        })}
        {session?.user.role === "ADMIN" && (
          <motion.li
            variants={{
              hidden: { opacity: 0, y: -10 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Link
              href={"/dashboard"}
              className="relative w-fit text-base font-semibold font-playfair italic transition-all duration-300 group"
            >
              {"Dashboard"}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-300 ${
                  pathname.includes("/dashboard")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          </motion.li>
        )}
      </motion.ul>
    </nav>
  );
};

export default Navbar;

const links = [
  { title: "Home", href: "/" },
  { title: "Menu", href: `/menu` },
  { title: "About", href: `/about` },
  { title: "Contact us", href: `/contact` },
  { title: "Our Blog", href: `/blog` },
];
