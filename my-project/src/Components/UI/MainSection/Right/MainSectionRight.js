import React from "react";
import "./../../../../styles/WelcomePage.css";
import CardGallerySlider from "./CardsGallerySlider";
const MainSectionRight = () => {
  return (
    <div className="mainsection__right">
      <CardGallerySlider/>
      <CardGallerySlider/>
    </div>
  );
};

export default MainSectionRight;
