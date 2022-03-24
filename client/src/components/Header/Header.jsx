import React, { useState } from "react";
import Web from "./Web";
import Mobile from "./Mobile";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="header sticky top-0 bg-orange-200">
      <nav className="flex justify-between lg:px-4 py-4 mx-auto">
        <div className="flex items-center">
          <img
            src={require("../../assets/logo.png")}
            alt="Armandine L Dev BARGE"
            className="h-12 2md:h-24"
          />
          <h3 className="text-xl 2sm:text-2xl lg:text-4xl pl-2">
            Armandine BARGE
          </h3>
        </div>
    <Web />
        <div className="flex md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setIsOpen(!isOpen)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
        
      </nav>
    </div>
  );
};

export default Header;
