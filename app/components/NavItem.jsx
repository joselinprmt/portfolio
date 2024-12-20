import Link from "next/link";
import React from "react";

const NavItem = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-gray-400 sm:text-base md:p-0 rounded hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavItem;
