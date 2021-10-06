import React, { useEffect, useState} from "react";

const Mana = (props) => {
  const [manaArr, setManaArr] = useState([]);

  
  useEffect(() => {
    const manaRegx = /(?<={).{1,2}(?=})/g;
    setManaArr(props.manaInfo.match(manaRegx));
  },[]);

  return (
    <div className=" mt-6 mana flex">
      {manaArr.map((manaSymbol) => {
        return ( 
          <img
            className="mr-4"
            src={`../../images/${manaSymbol}.png`}
            alt={`${manaSymbol}`}
          />
        );
      })}
    </div>
  );
};

export default Mana;
