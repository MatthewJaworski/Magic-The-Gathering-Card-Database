import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";
const Navbar = () => {

  const [hamburgerMenuOpen, sethamburgerMenuOpen] = useState(false);
  

  const hamburgerClickHandler = () => {
    sethamburgerMenuOpen(!hamburgerMenuOpen);
  };
  

  return (
    <>
      <nav className=" navbar mlg:items-center h-[52px] overflow-hidden flex items-center navbar justify-between  bg-gray-700">
        <SearchBar />
        <div className=" buttons mlg:hidden flex min-w-0 w-full xl:mr-4 sm:mr-0 justify-end items-center">
          <Button text="advanced" />
          <Button text="make deck"/>
          <Button text="about"/>
        </div>
        <button
          onClick={hamburgerClickHandler}
          className="hidden mlg:inline-block mr-4"
        >
          <span className="flex ">
            <svg
              className="hamburger-svg fill-[#fff]"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 4v2h26v-2h-26zm0 12h26v-2h-26v2zm0 10h26v-2h-26v2z"></path>
            </svg>
          </span>
        </button>
      </nav>
      {hamburgerMenuOpen && <HamburgerMenu />}
    </>
  );
};

export default Navbar;
