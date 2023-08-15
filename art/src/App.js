import React from "react";
import Navbar from "./components/Navbar.js";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home.js";
import Gallery from "./routes/Gallery.js";
import About from "./routes/About.js";
import Exhibitions from "./routes/Exhibitions.js";
import Contact from "./routes/Contact.js";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
