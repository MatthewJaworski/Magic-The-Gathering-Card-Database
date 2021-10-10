import React from "react";
import Button from "../../Button";

const SearchBarButton = (props) => {
  return (
    <Button onClick={props.onClick}>
      <spa>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" mr-2 h-6 w-6 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </spa>
    </Button>
  );
};


export default SearchBarButton;
