import React from "react";
import CardInfoTitle from "./CardInfoTitle";
import CardInfoDescription from "./CardInfoDescription/CardInfoDescription";

const CardInfo = (props) => {
  return (
    <section className="cardInfo info info-container  grid-cos">
      <div className="wrapper">
        <CardInfoTitle data={props.data} />
        <CardInfoDescription data={props.data} />
      </div>
    </section>
  );
};

export default CardInfo;
