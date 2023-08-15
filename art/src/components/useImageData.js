import { useState, useEffect } from "react";

const useImageData = (imagesPerPage) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.harvardartmuseums.org/image?apikey=${apiKey}&size=${imagesPerPage}&page=${currentPage}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }

        const data = await response.json();
        setImages((prevImages) => [...prevImages, ...data.records]);
        setTotalPages(data.info.pages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [currentPage, imagesPerPage]);

  const handleSeeMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return { images, handleSeeMore, currentPage, totalPages };
};

export default useImageData;
