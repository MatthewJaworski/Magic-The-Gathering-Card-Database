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
  const onChangeHandler = () => {
    setCardName(ref.current.value);
  };

  return (
    <form className="navbar__searchbar">
      <div className="navbar__searchbar__wrapper">
        <input
          onChange={onChangeHandler}
          ref={ref}
          className="navbar__searchbar__wrapper__input"
          type="text"
          placeholder="Search"
        />
      <SearchBarButton onClick={fetchHandler}/>
      </div>
    </form>
  );
};

export default SearchBar;
