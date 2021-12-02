import React, { useContext } from "react";
import Card from "./Card";
import CardInfo from "./CardInfo/CardInfo";
import CardDataContext from "./../../Logic/Context/CardDataContext";

const CardDisplaySection = () => {
  
  const cardData = useContext(CardDataContext);
  const imageUrl = cardData.data.image_uris.normal;
  const cardInfoData = {
    cardName: cardData.data.name,
    cardSubName: cardData.data.type_line,
    cardDescription: cardData.data.oracle_text,
    cardCreaturePower: cardData.data.power,
    cardCreatureToughness: cardData.data.toughness,
    cardIlustrationArtist: cardData.data.artist,
    cardMana: cardData.data.mana_cost,
  };

  return (
    <section className="cardDisplaySection">
      {cardData.dataIsFetched && <Card image={imageUrl} />}
      {cardData.dataIsFetched && <CardInfo data={cardInfoData} />}
    </section>
  );
};

export default CardDisplaySection;
