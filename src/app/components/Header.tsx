import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="w-full bg-base-100 px-3 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER TOP ================= */}
        <div className="grid grid-cols-1 items-center gap-3 sm:grid-cols-3">

          {/* Left - Empty on desktop */}
          <div className="hidden sm:block" />

          {/* Logo + Title + Date */}
          <div className="flex items-center justify-center">
            <Link href='/' className="transition-all duration-300 ease-out hover:scale-110 hover:text-red-700"><Image
              className="h-11 w-11 rounded-full object-cover sm:h-12 sm:w-12"
              height={50}
              width={50}
              src="/logo.webp"
              alt="Bangla News 24 logo"
            />
            </Link>
            <div className="ml-3">
              <Link href='/'><h1 className="text-lg font-bold leading-tight text-base-content sm:text-xl">
                Bangla News 24
              </h1></Link>

              <p className="mt-1 text-[11px] text-gray-500 sm:text-sm">
                {date}
              </p>
            </div>
          </div>

          {/* Buttons */}
         
          <div className="flex items-center justify-center gap-2 sm:justify-end">
            <Link
              href="/signin"
              className="inline-flex h-9 items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-red-700 hover:bg-red-50 hover:text-red-700 active:scale-95 sm:h-10 sm:px-5"
            >
              সাইন ইন
            </Link>

            <Link
              href="/signup"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-red-700 px-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-800 hover:shadow-md active:scale-95 sm:h-10 sm:px-5"
            >
              সাইন আপ
            </Link>
          </div>
          
        </div>

        {/* ================= NAVIGATION ================= */}
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;