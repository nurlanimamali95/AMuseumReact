import React from "react";
import "./About.css";
import video from "../assets/video-about15.mp4";

const About = () => {
  return (
    <div className="video-container">
      <video autoPlay muted loop className="video-background">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-overlay">
        <h1>About Us</h1>
        <p className="one">
          Welcome to <strong>Modern Art Museum</strong>, where art, history, and
          creativity converge to inspire and enrich lives. Our museum is a
          cultural haven that offers a glimpse into the past, present, and
          future through captivating exhibitions, educational programs, and
          interactive experiences.
        </p>
        <p className="two">
          Since our establishment in <strong>2010</strong>, our museum has been
          a steadfast pillar of the community. Our mission is to engage,
          educate, and foster a love for culture and learning. With a dedicated
          team of curators, educators, and experts, we curate exhibits that
          celebrate the diversity of human expression and offer insights into
          the world's art and history.
        </p>
        <p className="three">
          At Modern Art Museum, we believe in the power of inspiration,
          inclusivity, and community. We strive to create an environment where
          every visitor feels welcome, and where creativity thrives. Whether
          you're a seasoned art enthusiast or someone discovering the wonders of
          culture for the first time, we invite you to embark on a journey of
          exploration with us.
        </p>
        <p className="four">
          Join us in celebrating the beauty of the past, the vibrancy of the
          present, and the limitless possibilities of the future. We look
          forward to being a part of your journey.
        </p>
        <p className="five">
          For more information or to get involved, please check the{" "}
          <a href="/contact">Contact </a>
          {""}page.
        </p>
      </div>
    </div>
  );
};

export default About;
