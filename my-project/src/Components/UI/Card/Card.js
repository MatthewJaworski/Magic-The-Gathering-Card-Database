import React from "react";

const asideClasses="msm:rounded-none rounded-[17px] msm:h-full msm:justify-self-center msm:self-center msm:shadow-none msm:mb-[30px] msm:row-start-1 msm:row-end-3 max-w-[429px] max-h-[595px]  animate-float mx-3 flex flex-shrink min-w-0 min-h-0 overflow-hidden col-span-3 self-center justify-self-center bg-white";


const Card = (props) => {


  
  return (
    <aside className={asideClasses}>
      <img
        className="msm:rounded-none min-w-0 min-h-0 shadow-2xl  "
        src={props.image}
        alt="card"
      />
    </aside>
  );
};

export default Card;
