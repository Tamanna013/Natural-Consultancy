"use client";
import React, { useEffect, useState } from "react";
import About from "./components/about";
import Contactme from "./components/contactme";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Mainpage from "./components/mainpage";
import Testimonials from "./components/Testimonials";
import LoadingScreen from "./components/loadingPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const pathName = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const NavLinks = [
    { href: "#about", title: "About" },
    { href: "#experience", title: "Experience" },
    { href: "#projects", title: "Projects" },
    { href: "#contact", title: "Contact" },
  ];

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
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
              </div>
            </div>
          </header>

          <Mainpage />
          <section id="about">
            <About />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contactme />
          </section>
          <Testimonials />
        </>
      )}
    </>
  );
}