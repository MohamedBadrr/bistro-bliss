"use client";
import { Routes } from "@/constants/enums";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex-1 flex justify-end ">
      <ul
        className={`fixed flex-col top-10! md:top-0 lg:static  px-10 py-20 lg:p-0 flex gap-10 bg-background lg:bg-transparent transition-all duration-200  lg:flex-row w-full lg:w-auto items-start lg:items-center`}
      >
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <li key={index}>
              <Link
                // key={link.href}
                href={link.href}
                className="relative w-fit text-base font-semibold font-playfair italic  transition-all duration-300 group"
              >
                {link.title}

                <span
                  className={`
                absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-300
                ${isActive ? "w-full" : "w-0 group-hover:w-full"}
              `}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

const links = [
  { title: "Home", href: Routes.ROOT },
  { title: "Menu", href: `/${Routes.MENU}` },
  { title: "About", href: `/${Routes.ABOUT}` },
  { title: "Contact us", href: `/${Routes.CONTACT}` },
  { title: "Our Blog", href: `/${Routes.BLOG}` },
  
];
