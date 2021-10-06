import React from "react";

const Button = (props) => {
  return (
    <div class="xl:mr-5 sm:mr-1 mx-4 min-w-0 text-center">
      <button class="px-8 py-2 self-center min-w-0 text-white w-[100%] h-[40px] border rounded-full">
        {props.text}
      </button>
    </div>
  );
};

export default Button;
