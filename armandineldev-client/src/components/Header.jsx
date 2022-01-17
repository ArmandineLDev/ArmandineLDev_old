import React from "react";
const Header = () => {
  return (
    <div className="header">
      <nav class="container flex justify-between px-4 py-4 mx-auto text-slate-600 ">
        <div className="flex items-center">
          <img src={require("../assets/logo.png")} alt="A-LD" className="h-24"/>
          <h3 className="text-4xl  pl-2">Armandine BARGE</h3>
        </div>
        <div class="hidden space-x-8 lg:flex font-medium items-center">
          <a href="#about">A propos</a>
          <a href="#project">Projets</a>
          <a href="#skill">Compétences</a>
          <a href="#contact">Contactez-moi</a>
          <a href="/">Resume</a>
        </div>
        <div class="flex lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </nav>
     
      

    </div>
  );
};

export default Header;
