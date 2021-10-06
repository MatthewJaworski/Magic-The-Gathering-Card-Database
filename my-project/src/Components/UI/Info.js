import React from "react";
import Mana from "./Mana";

const Info = (props) => {
console.log("daskdjalskd")
  return (
    
    <section className="pl-4 info-container msm:col-auto msm:mt-0 msm:row-start-3 msm:row-end-[9] relative border-l-2 info grid-cos col-start-4 col-end-8 mt-14 mb-8 pt-16 bg-white">
      <div className="flex flex-grow w-full min-w-0 overflow-hidden">
        <div className="min-w-0 overflow-hidden">
          <h1 className=" text-5xl flex-wrap break-words  cardName uppercase font-bold mb-1">
         {props.cardName}
          </h1>
          <h5 className=" text-lg subName uppercase font-medium">
            {props.cardSubName}
          </h5>
          <Mana manaInfo={props.cardMana}/>
         {/*  <div className=" mt-6 mana flex">
            <img className="mr-4" src={kapsd} alt="mana" />
            <img  className="mr-4" src={kapsd} alt="mana" />
            <img src={kapsd} className="mr-4" alt="mana" />
            <img src={kapsd} className="mr-4" alt="mana" />
          </div> */}
        </div>
      </div>
      <div>
        <p className="text-xl font-Rubik uppercase mt-10">
          {props.cardDescription}
        </p>
      </div>
      <div className="stats text-right mt-24 mr-28">
        <p className=" inline-block w-full text-6xl">{`${props.cardCreaturePower}/${props.cardCreatureToughness}`}</p>
      </div>
      <p className="text-sm font-Amethysta">
        Illustrated by {props.cardIlustrationArtist}
      </p>
    </section>
  );
};

export default Info;
