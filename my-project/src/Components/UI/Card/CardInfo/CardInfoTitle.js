import React from "react";
import CardMana from "../CardMana";

const CardInfoTitle = (props) => {
  const { cardName, cardSubName, cardMana } = props.data;

  return (
    <>
      <div className="flex flex-grow w-full min-w-0 overflow-hidden">
        <div className="min-w-0 overflow-hidden">
          <h1 className=" text-5xl flex-wrap break-words  cardName uppercase font-bold mb-1">
            {cardName}
          </h1>
          <h5 className=" text-lg subName uppercase font-medium">
            {cardSubName}
          </h5>
          <CardMana manaInfo={cardMana} />
        </div>
      </div>
    </>
  );
};

export default CardInfoTitle;
