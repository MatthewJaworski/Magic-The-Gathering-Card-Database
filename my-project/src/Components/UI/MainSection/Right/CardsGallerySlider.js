import React from "react";
import SliderItem from "./SliderItem";
const CardGallerySlider = () => {
  return (
    <div className="cardGallerySlider">
      <div className="cardGallerySlider__wrapper">
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
      </div>
    </div>
  );
};

export default CardGallerySlider;
