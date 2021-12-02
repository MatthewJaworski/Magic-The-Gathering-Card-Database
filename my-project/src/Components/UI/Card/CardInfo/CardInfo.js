import React from "react";
import CardInfoTitle from "./CardInfoTitle";
import CardInfoDescription from "./CardInfoDescription";


const CardInfo = (props) => {

  return (
    <section className="cardInfo info info-container  grid-cos">
      <CardInfoTitle data={props.data} />
      <CardInfoDescription data={props.data} />
    </section>
  );
  
};

export default CardInfo;
