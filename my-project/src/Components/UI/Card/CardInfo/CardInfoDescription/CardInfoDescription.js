import React from "react";
import CardDescrption from "./CardDescrption";
const CardInfoDescription = (props) => {
    
  const {
    cardDescription,
    cardCreaturePower,
    cardCreatureToughness,
    cardIlustrationArtist,
  } = props.data;


  return (
    <>
      <CardDescrption text={cardDescription}/>
      <div className="stats text-right mt-24 mr-28">
       {cardCreaturePower && <p className=" inline-block w-full text-6xl">{`${cardCreaturePower}/${cardCreatureToughness}`}</p>}
      </div>
      <p className="text-sm font-Amethysta">
        Illustrated by {cardIlustrationArtist}
      </p>
    </>
  );
};

export default CardInfoDescription;
