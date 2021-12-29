import React from "react";
import SliderItem from "./SliderItem";
import getRandomInt from "../../../Logic/getRandomInt";
import {useState, useEffect } from "react";
const CardGallerySlider = () => {
  const [cardData, setCardData] = useState([]);
  let cardDataHelp = [];

  useEffect(() => {
    fetch("https://api.scryfall.com/cards/search?q=t:creature")
      .then((response) => response.json())
      .then((responseJson) => fetchHandler(responseJson));
  }, []);

  function fetchHandler(data) {
    const min = Math.ceil(0);
    const max = Math.floor(data.data.length);
    let cardNumbers = [];

    while (cardNumbers.length !== 5) {
      cardNumbers.push(getRandomInt(min, max));
      cardNumbers = cardNumbers.filter(
        (item, pos) => cardNumbers.indexOf(item) === pos
      );
    }
    for (let i = 0; i < cardNumbers.length; i++) {
      cardDataHelp = [
        ...cardDataHelp,
        {
          cardImg: data.data[cardNumbers[i]].image_uris.normal,
          cardName: data.data[cardNumbers[i]].name,
        },
      ];
    }

    cardDataHelp = [...cardDataHelp, ...cardDataHelp];
    setCardData(cardDataHelp);
    console.table(cardDataHelp);
  }

  return (
    <div className="cardGallerySlider">
      <div className="cardGallerySlider__wrapper">
        {cardData.map((card) => (
          <SliderItem cardImg={card.cardImg} name={card.cardName} />
        ))}
      </div>
    </div>
  );
};

export default CardGallerySlider;
