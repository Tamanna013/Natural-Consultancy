"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";

export default function Navbar() {
  const pathName = usePathname();
  const NavLinks = [
    { href: "about", title: "About" },
    { href: "#experience", title: "Experience" },
    { href: "#projects", title: "Projects" },
    { href: "#contact", title: "Contact" },
  ];
  
  return (
      <header className="z-40 bg-black py-5 md:py-10 sticky">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <Link
              href="/"
              className={classNames("hidden text-3xl font-extrabold sm:block", {
                "": pathName === "/",
              })}
              aria-label="Logo"
            >
              Tamanna Shaw.
            </Link>
          </div>
          <div className="flex items-center space-x-3 text-base leading-5">
            <div className="hidden space-x-5 sm:flex">
              {NavLinks.map(({ title, href }) => {
                const isActive = pathName?.includes(href);
                return (
                  <Link
                    key={title}
                    href={href}
                    className={classNames("horizontal-underline text-base", {
                      "horizontal-underline-active": isActive,
                    })}
                    aria-label={title}
                  >
                    <span className="font-semibold tracking-wide text-gray-900 dark:text-gray-100">
                      {title}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center">
            </div>
          </div>
        </div>
      </header>
  );
}
