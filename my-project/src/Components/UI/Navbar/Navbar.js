import React, { useState } from "react";
import "./../../../styles/Navbar.css";
import SearchBar from "./SerachBar/SearchBar";
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
      <nav className="navbar">
        <SearchBar />
        <NavbarButtons />
        <NavbarHamburgerIcon onClick={hamburgerClickHandler} />
      </nav>
      {hamburgerMenuOpen && <HamburgerMenu />}
    </>
  );
};

export default Navbar;
