import React from "react";
import Main from "../components/Main";
import Footer from "../components/Footer";
import "../routes/Home.css";
import video from "../assets/home-video.mp4";

const Home = () => {
  return (
    <>
      <header>
        <div className="center">
          <h1 className="home-text">
            <span className="art-museum">Welcome to Modern Art Museum</span>
            <span className="art-museum">Welcome to Modern Art Museum</span>
            <span className="art-museum">Welcome to Modern Art Museum</span>
          </h1>
        </div>
      </header>
      <section>
        {" "}
        <div className="home-video">
          <video autoPlay muted loop className="home-video-background">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="home-paragraph">
          Welcome to a realm where the harmonious confluence of art, history,
          and boundless creativity creates an enchanting tapestry that
          consistently inspires and profoundly enriches lives. Our museum stands
          as a veritable cultural haven, inviting visitors to embark on a
          captivating journey through time, as we unveil the intricate interplay
          between the past, present, and even the tantalizing threads of the
          future. Within our hallowed walls, each corner unveils a treasure
          trove of exhibitions that transcend the ordinary, offering windows
          into the diverse narratives that have shaped civilizations and
          societies. From meticulously curated art collections that evoke
          emotions and spark dialogues, to immersive displays chronicling the
          evolution of history's pivotal moments, every exhibit is a testament
          to our commitment to fostering understanding and fostering a sense of
          wonder.With open arms, we welcome you to indulge your senses,
          expand your horizons, and discover the countless ways in which the
          convergence of art, history, and creativity can inspire, enlighten,
          and transform lives."
        </p>
      </section>
      <Main />
      <Footer />
    </>
  );
};

export default Home;
