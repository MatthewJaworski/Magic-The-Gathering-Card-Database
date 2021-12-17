import React from "react";

const Card = (props) => {


  
  return (
    <aside className="imageContainer">
      <img
        className="card"
        src={props.image}
        alt="card"
      />
    </aside>
  );
};

export default Card;
