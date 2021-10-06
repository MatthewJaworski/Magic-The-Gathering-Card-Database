import React, { useContext, useState, useRef } from "react";
import CardContext from "./CardDataContext";
import useFetch from "../Logic/hooks/use-fetch";
const SearchBar = () => {
  const cardData = useContext(CardContext);
  const ref = useRef();
  const [cardName, setCardName] = useState("");
  const [data, error] = useFetch(
    `https://api.scryfall.com/cards/named?fuzzy=${cardName}`,
    cardName
  );

  function fetchHandler(e) {
    e.preventDefault();
    if (data === null) {
      cardData.setError(true);
      return;
    }
    cardData.setData(data);
    cardData.setDataIsFetched(true);
  }
  console.log(data);
  console.log(cardData.error);

  const onChangeHandler = () => {
    setCardName(ref.current.value);
  };

  return (
    <form className="  mlg:mx-[2rem] 2xl:ml-20 xl:ml-10 w-[100%] min-w-[0px] max-w-[663px]">
      <div className="h-[40px] bg-white  flex items-center justify-between rounded-full ">
        <input
          onChange={onChangeHandler}
          ref={ref}
          className=" min-w-0 ml-3 flex-grow  outline-none text-gray-600 focus:text-blue-600"
          type="text"
          placeholder="Search"
        />
        <button onClick={fetchHandler}>
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
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
