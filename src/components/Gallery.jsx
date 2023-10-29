import React from "react";
import styles from "../style";
import ImageGallery from "react-image-gallery";
import { imageUrls } from "../constants";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  return (
    <section id="realizacje" className={`${styles.paddingY} flex-col`}>
      <h2 className={styles.heading2}>Realizacje</h2>
      <ImageGallery
        items={imageUrls}
        showPlayButton={false}
        lazyLoad={true}
        slideDuration={200}
      />
    </section>
  );
};

export default Gallery;
