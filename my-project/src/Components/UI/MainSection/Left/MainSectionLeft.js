import React from "react";

const MainSectionLeft = () => {
  const paraClasses =
    "  text-white text-shadow text-8xl mmlg:text-7xl inline-block font-bold ";

  const containerStyles =
    " transition-all bg-white leading-3 border-b-[11px] border-black mb-[64px] mlg:ml-[3rem] mmlg:ml-[2rem] ml-[10rem]";

  return (
    <main className="w-full overflow-hidden relative msm:row-start-1 msm:row-end-7 col-span-1 ">
      <div className="absolute mlg:left-2 top-20  mmlg:left-3 left-11">
        <div className={containerStyles}>
          <p className="text-8xl inline-block mmlg:text-7xl left mb-[-20px] ">FIND</p>
          <p className={paraClasses}>CARDS</p>
          <p className="pb-8 leading-7 font-Amethysta">
            Explore magic the gathering word and find cards you are looking for.
          </p>
        </div>
        <div className={containerStyles}>
          <p className="text-8xl mmlg:text-7xl inline-block mb-[-20px]">CREATE</p>
          <p className={paraClasses}>DECKS</p>
          <p className="pb-8 leading-7 font-Amethysta">
            Build amazing, creative decks to compete with others.
          </p>
        </div>
      </div>
    </main>
  );
};

export default MainSectionLeft;
