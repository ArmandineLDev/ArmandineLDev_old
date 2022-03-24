import React from "react";
import Navbar from "./Navbar";

const Mobile = ({ isOpen, setIsOpen }) => {
  return (
    <div className="flex flex-col h-screen w-1/3 absolute right-0 top-0 bg-orange-200 items-center mt-2">
      <div
        className="flex flex-col bg-orange-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-x-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </div>
      <div className="mt-4 space-y-2" onClick={() => setIsOpen(!isOpen)}><Navbar /></div>
      
    </div>
  );
};

export default Mobile;
