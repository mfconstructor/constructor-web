import styles from "../style";
import { worker } from "../assets";
import SeeProjects from "./SeeProjects";

const Intro = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[42px] text-white ss:leading-[100.8px] leading-[55px]">
            Remonty <br className="sm:block hidden" /> <span>wykończenia</span>{" "}
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <SeeProjects />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[38px] text-white ss:leading-[100px] leading-[55px] w-full">
          <span className={`text-tertiary`}>Kraków</span> i okolice.
        </h1>
        <p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
          FIX DPD to profesjonalna firma remontowo-wykończeniowa, która spełni
          wszelkie Twoje oczekiwania. Wyróżnia mnie wysoka jakość usług,
          kompleksowe podejście do prac remontowo-budowlanych, a także korzystne
          warunki realizacji. Oferuję konkurencyjne ceny i zapewniam bardzo
          dobry kontakt.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative hidden md:block`}
      >
        <img
          src={worker}
          alt="billing"
          className="w-[70%] h-[100%] relative z-[5] hidden md:block"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <SeeProjects />
      </div>
    </section>
  );
};

export default Intro;
