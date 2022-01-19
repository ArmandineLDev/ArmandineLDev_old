import React from "react";
import Navbar from "./Navbar";

const Header = () => {

  return (
    <div className="header">
      <nav className="flex justify-between lg:px-4 py-4 mx-auto border-3 border-blue-600">
        <div className="flex items-center">
          <img src={require("../../assets/logo.png")} alt="Armandine L Dev BARGE" className="h-12 md:h-24"/>
          <h3 className="text-xl 2sm:text-2xl lg:text-4xl pl-2">Armandine BARGE</h3>
        </div>
        
         <Navbar />

        
        <div className="flex 2md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={console.log('on clique')}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </nav>
     
      

    </div>
  );
};

export default Header;
