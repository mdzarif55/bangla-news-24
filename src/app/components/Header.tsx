import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="w-full bg-base-100 px-4 py-3 sm:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center">
        
        {/* Left */}
        <div></div>

        {/* Center */}
        <div className="flex items-center justify-center">
          <Image
            className="h-12 w-12 rounded-full object-cover"
            height={50}
            width={50}
            src="/logo.jpg"
            alt="logo"
          />

          <div className="ml-3">
            <h2 className="text-xl font-bold leading-tight">
              Bangla News 24
            </h2>

            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              {date}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end gap-2">
          <button className="btn btn-sm sm:btn-md">
            সাইন ইন
          </button>

          <button className="btn btn-sm bg-red-700 text-white hover:bg-red-800 sm:btn-md">
            সাইন আপ
          </button>
        </div>
      </div>
      <NavLinks/>
    </header>
  );
};

export default Header;