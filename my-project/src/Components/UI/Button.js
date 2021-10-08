import React from "react";

const Button = (props) => {
  return (
    <div class={props.divStyle} onClick={props.onClick}>
      <button class={props.btnStyle}>
        {props.text}
        {props.children}
      </button>
    </div>
  );
};

export default Button;
//div "xl:mr-5 sm:mr-1 mx-4 min-w-0 text-center"
//btn "px-8 py-2 self-center min-w-0 text-white w-[100%] h-[40px] border rounded-full"