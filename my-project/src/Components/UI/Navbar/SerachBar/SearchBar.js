import React, { useContext, useState, useRef } from "react";
import CardContext from "../../../Logic/Context/CardDataContext";
import useFetch from "../../../Logic/hooks/use-fetch";
import SearchBarButton from "./SearchBarButton";


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
      cardData.setError(error);
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
      <SearchBarButton onClick={fetchHandler}/>
      </div>
    </form>
  );
};

export default SearchBar;
