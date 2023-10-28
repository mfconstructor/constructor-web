import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const SeeProjects = () => {
  return (
    <a href={`#realizacje`}>
      <div
        className={`${styles.flexCenter} ss:w-[140px] ss:h-[140px] w-[110px] h-[110px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
      >
        <div
          className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
        >
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
              <span className="text-white">Zobacz</span>
            </p>
            <img
              src={arrowUp}
              alt="arrow"
              className="w-[23px] h-[23px] object-contain"
            />
          </div>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-white">Realizacje</span>
          </p>
        </div>
      </div>
    </a>
  );
};

export default SeeProjects;
