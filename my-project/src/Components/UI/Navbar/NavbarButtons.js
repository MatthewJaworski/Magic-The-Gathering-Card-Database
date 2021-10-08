import React from "react";
import Button from "../Button";

const divStyle = "xl:mr-5 sm:mr-1 mx-4 min-w-0 text-center";
const btnStyle =
  "px-8 py-2 self-center min-w-0 text-white w-[100%] h-[40px] border rounded-full";
  
const NavbarButtons = () => {
  return (
    <div className=" buttons mlg:hidden flex min-w-0 w-full xl:mr-4 sm:mr-0 justify-end items-center">
      <Button divStyle={divStyle} btnStyle={btnStyle} text="advanced" />
      <Button divStyle={divStyle} btnStyle={btnStyle} text="make deck" />
      <Button divStyle={divStyle} btnStyle={btnStyle} text="about" />
    </div>
  );
};

export default NavbarButtons;
