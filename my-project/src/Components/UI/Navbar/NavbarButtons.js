import React from "react";
import Button from "../Button";

const divStyle = "";
const btnStyle = "navbar__buttons--primary";

const NavbarButtons = () => {
  return (
    <div className="navbar__buttons">
      <Button divStyle={divStyle} btnStyle={btnStyle} text="Advanced" />
      <Button divStyle={divStyle} btnStyle={btnStyle} text="Make deck" />
      <Button divStyle={divStyle} btnStyle={btnStyle} text="About" />
    </div>
  );
};

export default NavbarButtons;
