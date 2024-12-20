"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import NavItem from "./NavItem";

const navItem = [
  {
    path: "about",
    title: "About",
  },
  {
    path: "projects",
    title: "Projects",
  },
  {
    path: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 right-0 z-10 bg-neutral-900 opacity-95">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 md:pr-12">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          className="text-2xl text-white font-semibold px-4"
        >
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={28}
            height={28}
            className="mx-8 my-2"
          />
        </ScrollLink>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navItem.map((item) => (
              <li key={item.path}>
                <ScrollLink
                  to={item.path}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-white cursor-pointer hover:text-white"
                >
                  {item.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="mobile-navbar block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center p-2 text-slate-200 hover:text-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center p-2 text-slate-200 hover:text-white"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
      {navbarOpen ? (
        <ul className="flex flex-col items-center pb-8">
          {navItem.map((item) => (
            <li key={item.path}>
              <ScrollLink
                to={item.path}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-white cursor-pointer hover:text-white"
              >
                {item.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;
