import React from "react";
import Button from "./../Button";

const HamburgerMenu = () => {
  
  const divStyle = "xl:mr-5 sm:mr-1 mx-4 min-w-0 text-center";
  const btnStyle =
    "px-8 py-2 self-center min-w-0 text-white w-[100%] h-[40px] border rounded-full";

  return (
    <div className=" py-4 border-t hamburgermenu flex justify-center min-w-full bg-gray-700">
      <Button divStyle={divStyle} btnStyle={btnStyle} text="advanced" />
      <Button divStyle={divStyle} btnStyle={btnStyle} text="make deck" />
      <Button divStyle={divStyle} btnStyle={btnStyle} text="about" />
    </div>
  );
};

export default HamburgerMenu;
