import React from "react";
import { offers } from "../constants";
import styles, { layout } from "../style";
import { circle } from "../assets";

const AdvantageCart = ({ offer }) => (
  <div className={`flex flex-row p-3 rounded-[20px] justify-start`}>
    <div className={`w-[23px] h-[23px] ${styles.flexCenter}`}>
      <img src={circle} alt="icon" className="w-[40%] h-[40%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[15px] leading-[20px] mb-1">
        {offer}
      </h4>
    </div>
  </div>
);

function splitArray(arr) {
  const length = arr.length;
  const midpoint = Math.ceil(length / 2);

  const firstHalf = arr.slice(0, midpoint);
  const secondHalf = arr.slice(midpoint);

  return [firstHalf, secondHalf];
}

const Offer = () => {
  const [firstHalf, secondHalf] = splitArray(offers);
  return (
    <section id="oferta">
      <h2 className={`${styles.heading2}`}>Oferta</h2>
      <div className="flex md:flex-row flex-col sm:py-2 py-1">
        <div className="flex-1 flexmd:mr-10 mr-0 md:mt-0 mt-1 relative">
          <div className={`flex-col`}>
            {firstHalf.map((offer, index) => (
              <AdvantageCart key={index} offer={offer} />
            ))}
          </div>
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
        </div>
        <div className="flex-1 flexmd:mr-10 mr-0 md:mt-0 mt-1 relative">
          <div className={`flex-col`}>
            {secondHalf.map((offer, index) => (
              <AdvantageCart key={index} offer={offer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
