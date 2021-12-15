import React from "react";

const MainSectionLeft = () => {
  return (
    <section className="mainsection__left">
      <div className="mainsection__left__container ">
        <div className="wrapper">
          <h1 className=" wrapper__heading text-[96px]  font-bold">
            FIND CARDS
          </h1>
          <p className=" wrapper__paragraph font-Rubik text-[36px]">
            EXPLORE MAGIC THE GATHERING WORD AND EPIC SPELLS
          </p>
        </div>
        <div className="wrapper">
          <h1 className=" wrapper__heading text-[96px] font-bold">
            CREATE DECKS
          </h1>
          <p className="wrapper__paragraph font-Rubik text-[36px]">
            MAKE THE STRONGEST DECKS TO PLAY AGINST THE OTHERS
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainSectionLeft;
