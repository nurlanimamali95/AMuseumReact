import React from "react";
import useApiData from "./useApi.js";

const Main = () => {
  const { data, isLoading } = useApiData("audio", "&size=10");
  return (
    <div className="main">
      <h1>Audios</h1>
      <p>
        Immerse yourself in the rich tapestry of art and culture through our
        captivating audio clips. Embark on a sensory journey as you listen to
        expert narrations that vividly describe the intricate details of
        masterpieces from bygone eras, as well as contemporary works that
        redefine artistic boundaries.
      </p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="audio-list">
          {data.map((audio) => (
            <div key={audio.audioid} className="audio">
              <h4>{audio.description}</h4>
              <div className="audio-player">
                <audio controls>
                  <source src={audio.primaryurl} type="audio/mpeg" />
                  Your browser does not support the audio tag.
                </audio>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
