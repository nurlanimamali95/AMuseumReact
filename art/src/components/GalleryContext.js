import React, { createContext, useContext, useState, useEffect } from "react";

const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const apiKey = "6e58a735-ded2-493a-82ba-38052969edb3";

  return (
    <GalleryContext.Provider value={{ apiKey }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGalleryContext = () => {
  return useContext(GalleryContext);
};
