import React, { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Panels from "./components/Panels";
import "./components/App.css";
import "./assets/style.css";
import "./components/App.css";


const App = () => {
  const [signUpMode, setSignUpMode] = useState(false);

  return (
    <div className={`container ${signUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <SignIn />
          <SignUp />
        </div>
      </div>
      <Panels setSignUpMode={setSignUpMode} />
    </div>
  );
};

export default App;
