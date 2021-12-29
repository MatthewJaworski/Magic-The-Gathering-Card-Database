import React from "react";
const SliderItem = ({name,cardImg}) => {
  

  return (
    <div className="sliderItem">
      <img className="sliderItem__image" src={cardImg} alt={name}  />
    </div>
  );
};

export default SliderItem;
