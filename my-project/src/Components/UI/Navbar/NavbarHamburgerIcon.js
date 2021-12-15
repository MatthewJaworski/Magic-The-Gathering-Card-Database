import React from "react";
import Button from "../Button";
const NavbarHamburgerIcon = (props) => {
  return (
      
    <Button divStyle=" navbar__hamburgericon hidden mlg:inline-block mr-4" onClick={props.onClick}>
      <span className="flex">
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
    </Button>
  );
};

export default NavbarHamburgerIcon;
