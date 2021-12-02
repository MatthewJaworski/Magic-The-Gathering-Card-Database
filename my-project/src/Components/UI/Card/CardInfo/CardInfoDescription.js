import React from "react";

const CardInfoDescription = (props) => {
    
  const {
    cardDescription,
    cardCreaturePower,
    cardCreatureToughness,
    cardIlustrationArtist,
  } = props.data;


  return (
    <>
      <div>
        <p className="text-xl font-Rubik uppercase mt-10">{cardDescription}</p>
      </div>
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
