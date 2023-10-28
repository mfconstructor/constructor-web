import React from "react";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Offer,
  Testimonials,
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
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Gallery />
          <Offer />
          {/*<Testimonials />*/}
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
