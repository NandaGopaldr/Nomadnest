import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [videoSrc, setVideoSrc] = useState("src/assets/vid-1.mp4");

  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Adventure is worthwhile</h3>
        <p>Discover new places with us, adventure awaits</p>
        <a href="#" className="btn">Discover more</a>
      </div>

      <div className="controls">
        {[1, 2, 3, 4, 5].map((num) => (
          <span
            key={num}
            className={`vid-btn ${videoSrc === `Images/vid-${num}.mp4` ? "active" : ""}`}
            onClick={() => setVideoSrc(`Images/vid-${num}.mp4`)}
          ></span>
        ))}
      </div>

      <div className="video-container">
        <video src={videoSrc} id="video-slider" loop autoPlay muted></video>
      </div>
    </section>
  );
};

export default Home;
