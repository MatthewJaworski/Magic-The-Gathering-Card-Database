import React from "react";
import { useState, useEffect } from "react";

const regEx = /{.{1,3}}/g;

const CardDescrption = (props) => {
  const [symbolsArray, setSymbolsArray] = useState([]);

  const [description, setDescription] = useState("");
  let slowo = props.text;

  useEffect(() => {
    setDescription(props.text);
    setSymbolsArray(props.text.match(regEx));
  }, [props]);

  if (symbolsArray) {
    for (let i = 0; i < symbolsArray.length; i++) {
      let symbol = symbolsArray[i].replace(/\W/g, "");
      slowo = slowo.replace(
        symbolsArray[i],
        `<abbr class="card-symbol card-symbol-${symbol}">${symbol}</abbr>`
      );
    }
  } 

  return (
    <div className="CardDescription__Wrapper">
      {symbolsArray && (
        <p
          className="description  "
          dangerouslySetInnerHTML={{ __html: slowo }}
        ></p>
      )}
      {!symbolsArray && <p className=" description">{props.text}</p>}
    </div>
  );
};

export default CardDescrption;
