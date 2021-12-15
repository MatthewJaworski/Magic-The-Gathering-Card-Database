import React from "react";
import Button from "./../Button";

const HamburgerMenu = () => {
  
  const divStyle = "container hamburgermenu__container xl:mr-5 sm:mr-1 mx-4 min-w-0 text-center";
  const btnStyle =
    "hamburgermenu__container__button px-8 py-2 self-center min-w-0 text-white w-[100%] h-[40px] border rounded-full";

  return (
    <div className="hamburgermenu">
      <Button divStyle={divStyle} btnStyle={btnStyle} text="Advanced" />
      <Button divStyle={divStyle} btnStyle={btnStyle} text="Make deck" />
      <Button divStyle={divStyle} btnStyle={btnStyle} text="About" />
    </div>
  );
};

export default HamburgerMenu;
