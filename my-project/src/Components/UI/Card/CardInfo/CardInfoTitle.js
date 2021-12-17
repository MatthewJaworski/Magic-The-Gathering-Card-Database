import React from "react";
import CardMana from "../CardMana";

const CardInfoTitle = (props) => {
  const { cardName, cardSubName, cardMana } = props.data;

  return (
    <>
      <div className="cardInfoTitle">
        <div className="cardInfoTitle__wrapper">
          <h1 className="  cardName uppercase font-bold mb-1">
            {cardName}
          </h1>
          <h5 className="subName uppercase font-medium">
            {cardSubName}
          </h5>
          <CardMana manaInfo={cardMana} />
        </div>
      </div>
    </>
  );
};

export default CardInfoTitle;
