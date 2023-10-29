import React from "react";
import styles from "../style";
import ImageGallery from "react-image-gallery";
import { photo2, photo3 } from "../assets";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  const images = [
    {
      original: photo2,
      thumbnail: photo2,
    },
    {
      original: photo3,
      thumbnail: photo3,
    },
    {
      original: photo2,
      thumbnail: photo2,
    },
    {
      original: photo3,
      thumbnail: photo3,
    },
    {
      original: photo2,
      thumbnail: photo2,
    },
    {
      original: photo3,
      thumbnail: photo3,
    },
    {
      original: photo2,
      thumbnail: photo2,
    },
    {
      original: photo3,
      thumbnail: photo3,
    },
    {
      original: photo2,
      thumbnail: photo2,
    },
    {
      original: photo3,
      thumbnail: photo3,
    },
    {
      original: photo2,
      thumbnail: photo2,
    },
    {
      original: photo3,
      thumbnail: photo3,
    },
  ];
  return (
    <section id="realizacje" className={`${styles.paddingY} flex-col`}>
      <h2 className={styles.heading2}>Realizacje</h2>
      <ImageGallery
        items={images}
        showPlayButton={false}
        lazyLoad={true}
        slideDuration={200}
      />
    </section>
  );
};

export default Gallery;
