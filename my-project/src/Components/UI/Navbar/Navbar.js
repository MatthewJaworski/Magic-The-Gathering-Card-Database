import React, { useState } from "react";
import SearchBar from "./SearchBar";
import NavbarButtons from "./NavbarButtons";
import HamburgerMenu from "./HamburgerMenu";
import NavbarHamburgerIcon from "./NavbarHamburgerIcon";

const Navbar = () => {
  const [hamburgerMenuOpen, sethamburgerMenuOpen] = useState(false);

  const hamburgerClickHandler = () => {
    sethamburgerMenuOpen(!hamburgerMenuOpen);
  };

  return (
    <>
      <nav className=" navbar mlg:items-center h-[52px] overflow-hidden flex items-center navbar justify-between  bg-gray-700">
        <SearchBar />
        <NavbarButtons />
        <NavbarHamburgerIcon onClick={hamburgerClickHandler} />
      </nav>
      {hamburgerMenuOpen && <HamburgerMenu />}
    </>
  );
};

export default Navbar;
