import React from "react";
import {
  About,
  Footer,
  Contact,
  Intro,
  Navbar,
  Stats,
  Offer,
  Gallery,
} from "./components";
import { backgroundImage } from "./assets";
import styles from "./style";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div
        className={`bg-primary ${styles.flexStart} bg-opacity-100`}
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className={`${styles.boxWidth}`}>
          <Intro />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <About />
          <Gallery />
          <Offer />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
