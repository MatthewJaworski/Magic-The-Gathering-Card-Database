import React from "react";
import CardInfoTitle from "./CardInfoTitle";
import CardInfoDescription from "./CardInfoDescription";

const sectionClasses =
  "pl-4 info-container msm:col-auto msm:mt-0 msm:row-start-3 msm:row-end-[9] relative border-l-2 info grid-cos col-start-4 col-end-8 mt-14 mb-8 pt-16 bg-white";

const CardInfo = (props) => {

  return (
    <section className={sectionClasses}>
      <CardInfoTitle data={props.data} />
      <CardInfoDescription data={props.data} />
    </section>
  );
  
};

export default CardInfo;
