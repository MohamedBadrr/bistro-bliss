"use client";
import { Pages, Routes } from "@/constants/enums";
import Link from "next/link";
import React, { useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { Menu, XIcon } from "lucide-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const links = [
    {
      id: crypto.randomUUID(),
      // title: translations.navbar.menu,
      title: "menu",
      href: Routes.MENU,
    },
    {
      id: crypto.randomUUID(),
      // title: translations.navbar.about,
      title: "about",
      href: Routes.ABOUT,
    },
    {
      id: crypto.randomUUID(),
      // title: translations.navbar.contact,
      title: "contact",
      href: Routes.CONTACT,
    },
    {
      id: crypto.randomUUID(),
      // title: translations.navbar.contact,
      title: "blog",
      href: Routes.BLOG,
    },
    {
      id: crypto.randomUUID(),
      // title: translations.navbar.contact,
      title: "login",
      href: `${Routes.AUTH}/${Pages.LOGIN}`,
    },
  ];
  return (
    <nav className="flex-1 flex justify-end">
      {openMenu ? (
        <Button
          className="lg:hidden z-60"
          onClick={() => setOpenMenu(false)}
          variant={"ghost"}
        >
          <XIcon className="h-6! w-6! " />
        </Button>
      ) : (
        <Button
          className="lg:hidden "
          onClick={() => setOpenMenu(true)}
          variant={"ghost"}
        >
          <Menu className="h-6! w-6! " />
        </Button>
      )}
      <ul
        className={`fixed lg:static ${
          openMenu ? "left-0 z-50" : "-left-full"
        } top-0 px-10 py-20 lg:p-0 flex gap-10 bg-background lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto items-start lg:items-center`}
      >
        {links.map((link) => (
          <li key={link.id}>
            <Link
              onClick={() => setOpenMenu(false)}
              href={`/${link.href}`}
              className={`${
                link.href === `${Routes.AUTH}/${Pages.LOGIN}`
                  ? `${buttonVariants({
                      size: "lg",
                    })} rounded-full! px-8! text-white`
                  : "hover:text-primary duration-200 transition-colors "
              } font-semibold `}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
