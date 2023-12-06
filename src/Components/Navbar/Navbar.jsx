"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function Navbar() {
  const pathname = usePathname();
  // console.log("pathname = ", pathname);

  // useEffect(() => {
  //   console.log("mounting");
  // });

  return (
    <header className="bg-slate-100 flex justify-center items-center shadow-md px-7 mb-5">
      <Link
        href="/"
        className={`py-3 px-5 hover:bg-gray-300 cursor-pointer border-x ${
          pathname === "/" && "bg-green-400"
        }`}
      >
        Home
      </Link>

      <Link
        href="/articles"
        className={`py-3 px-5 hover:bg-gray-300 cursor-pointer border-x ${
          pathname === "/articles" && "bg-green-400"
        }`}
      >
        Articles
      </Link>

      <Link
        href="/create-article"
        className={`py-3 px-5 hover:bg-gray-300 cursor-pointer border-x ${
          pathname === "/create-article" && "bg-green-400"
        }`}
      >
        Create Article
      </Link>

      <Link
        href="/my-blogs"
        className={`py-3 px-5 hover:bg-gray-300 cursor-pointer border-x ${
          pathname === "/my-blogs" && "bg-green-400"
        }`}
      >
        My blogs
      </Link>

      <Link
        href="/login"
        className={`py-3 px-5 hover:bg-gray-300 cursor-pointer border-x ${
          pathname === "/login" && "bg-green-400"
        }`}
      >
        Login
      </Link>

      <div className="py-3 px-5 hover:bg-gray-300 cursor-pointer border-x">
        Log Out
      </div>
    </header>
  );
}

export default Navbar;
