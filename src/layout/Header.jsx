import React from "react";
import Logo from "../assets/images/Logo.png";

const Header = () => {
  return (
    <div className="bg-white">
      <header className="container mx-auto p-4 text-white flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span>
            <img
              className="w-[150px] h-[24px] flex-shrink-0"
              src={Logo}
              alt="Logo"
            />
          </span>
        </div>

        {/* Button */}
        <button className="bg-purple text-white font-semibold p-2 rounded-lg font-FiraGO text-base leading-5 inline-flex justify-center items-center gap-4">
          შესვლა
        </button>
      </header>
    </div>
  );
};

export default Header;
