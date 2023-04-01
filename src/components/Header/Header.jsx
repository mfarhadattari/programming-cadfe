import { faMicrochip, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-800 w-full h-[100] mx-auto p-5 lg:px-20 text-white sticky top-0 z-0 flex flex-col md:flex-row items-center justify-between gap-5">
      <div className="font-semibold text-3xl">
        <FontAwesomeIcon icon={faMicrochip}></FontAwesomeIcon>{" "}
        <a href="#home">Programming Cafe</a>
      </div>
      <nav className="flex gap-5 items-center font-semibold text-xl">
        <a href="#home" className="hover:bg-pink-600 px-3 py-2 rounded-xl">
          Home
        </a>
        <a href="#blog" className="hover:bg-pink-600 px-3 py-2 rounded-xl">
          Blog
        </a>
        <a href="#contract" className="hover:bg-pink-600 px-3 py-2 rounded-xl">
          Contract
        </a>
        <a
          href="#dashboard"
          className="bg-slate-500 hover:bg-pink-600 rounded-full px-3 py-3 h-[50px] w-[50px] text-center"
        >
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        </a>
      </nav>
    </div>
  );
};

export default Header;
