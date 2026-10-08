import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";

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
            <Image
              className="h-11 w-11 rounded-full object-cover sm:h-12 sm:w-12"
              height={50}
              width={50}
              src="/logo.webp"
              alt="Bangla News 24 logo"
            />

            <div className="ml-3">
              <h1 className="text-lg font-bold leading-tight text-base-content sm:text-xl">
                Bangla News 24
              </h1>

              <p className="mt-1 text-[11px] text-gray-500 sm:text-sm">
                {date}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-2 sm:justify-end">
            <button className="btn btn-sm sm:btn-md">
              সাইন ইন
            </button>

            <button className="btn btn-sm bg-red-700 text-white hover:bg-red-800 sm:btn-md">
              সাইন আপ
            </button>
          </div>
        </div>

        {/* ================= NAVIGATION ================= */}
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;