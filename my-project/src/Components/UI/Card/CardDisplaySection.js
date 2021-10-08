import React, { useContext } from "react";
import Card from "./Card";
import CardInfo from "./CardInfo/CardInfo";
import CardDataContext from "./../../Logic/Context/CardDataContext";

const sectionStyle =
  "h-[calc(100vh-52px)] msm:mt-[50px] msm:gird msm:grid-cols-1 msm:grid-rows-8  grid grid-rows-1 grid-cols-7 bg-white";

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
    <section className={sectionStyle}>
      {cardData.dataIsFetched && <Card image={imageUrl} />}
      {cardData.dataIsFetched && <CardInfo data={cardInfoData} />}
    </section>
  );
};

export default CardDisplaySection;
