import React, { useContext } from "react";
import MagicCard from "./MagicCard";
import Info from "./Info";
import CardContext from "./CardDataContext";

const CardDisplay = () => {
  const cardData = useContext(CardContext);
  console.log(cardData.data.mana_cost);
  return (
    <section className="h-[calc(100vh-52px)] msm:mt-[50px] msm:gird msm:grid-cols-1 msm:grid-rows-8  grid grid-rows-1 grid-cols-7 bg-white ">
      {cardData.dataIsFetched && (
        <MagicCard image={cardData.data.image_uris.normal} />
      )}
      {cardData.dataIsFetched && (
        <Info
          cardName={cardData.data.name}
          cardSubName={cardData.data.type_line}
          cardDescription={cardData.data.oracle_text}
          cardCreaturePower={cardData.data.power}
          cardCreatureToughness={cardData.data.toughness}
          cardIlustrationArtist={cardData.data.artist}
          cardMana={cardData.data.mana_cost}
        />
      )}
    </section>
  );
};

export default CardDisplay;
