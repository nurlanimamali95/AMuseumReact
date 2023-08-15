import React from "react";
import "./Gallery.css";
import background from "../assets/gallery4.jpg";
import useImageData from "../components/useImageData";

const Gallery = () => {
  const imagesPerPage = 6;

  const { images, handleSeeMore, currentPage, totalPages } =
    useImageData(imagesPerPage);

  return (
    <div className="gallery-main">
      <img
        src={background}
        className="background-image"
        alt="background"
        rel="noreferrer"
      />
      <h1 className="image-heading">Gallery</h1>
      <div className="image-list">
        {images.map((image) => (
          <div key={image.id} className="image">
            <img src={image.baseimageurl} alt="Artwork" className="fade-in" />
            <p>©: {image.copyright}</p>
            <p>Date: {image.date}</p>
            <p>Technique: {image.technique}</p>
          </div>
        ))}
      </div>
      {currentPage < totalPages && (
        <button onClick={handleSeeMore}>See More</button>
      )}
    </div>
  );
};

export default Gallery;
