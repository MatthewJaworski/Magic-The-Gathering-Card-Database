import React, { useEffect, useState } from "react";

const manaRegx = /(?<={).{1,2}(?=})/g;

const CardMana = (props) => {
  const [manaArr, setManaArr] = useState([]);

  useEffect(() => {
    setManaArr(props.manaInfo.match(manaRegx));
  }, [props.manaInfo]);

  return (
    <div className=" mt-6 mana flex">
      {manaArr.map((manaSymbol) => {
        return (
          <img
            key={Math.random()*100}
            className="mr-4"
            src={require(`../../../images/${manaSymbol}.png`).default}
            alt={`${manaSymbol}`}
          />
        );
      })}
    </div>
  );
};

export default CardMana;
