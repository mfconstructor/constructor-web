import React from "react";
import { advantages } from "../constants";
import styles, { layout } from "../style";

const AdvantageCart = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== advantages.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="o-firmie" className={layout.section}>
      <div>
        <h2 className={`${styles.heading2} text-[20px]`}>
          <span className={`text-tertiary`}>Twój</span> projekt{" "}
          <br className="sm:block hidden" /> moim{" "}
          <span className={`text-tertiary`}>priorytetem</span>
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Wykonuję remonty i wykończenia wnętrz od ponad 12 lat. Doświadczenie,
          które zdobyłem zarówno w Polsce, jak i za granicą pozwala na
          wykonywanie kompleksowych usług o najwyższej jakości, z największą
          dbałością o szczegóły, przez co nie boję się realizacji usług nawet
          dla najbardziej wymagających Klientów. Swoje usługi świadczę na
          terenie całego Krakowa oraz przyległych okolicach.
        </p>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {advantages.map((advantage, index) => (
          <AdvantageCart key={advantage.id} {...advantage} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
