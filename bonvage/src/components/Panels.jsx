import React from "react";
import tripImage from "../assets/trip.svg"; // Move your images to /src/assets/
import campingImage from "../assets/camping.svg";

const Panels = ({ setSignUpMode }) => {
  return (
    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>New Here?</h3>
          <p>Join us now and start your journey.</p>
          <button className="btn transparent" onClick={() => setSignUpMode(true)}>
            Sign Up
          </button>
        </div>
        <img src={tripImage} className="image" alt="Trip" />
      </div>

      <div className="panel right-panel">
        <div className="content">
          <h3>One of us?</h3>
          <p>Sign in to continue your journey.</p>
          <button className="btn transparent" onClick={() => setSignUpMode(false)}>
            Sign In
          </button>
        </div>
        <img src={campingImage} className="image" alt="Camping" />
      </div>
    </div>
  );
};

export default Panels;
