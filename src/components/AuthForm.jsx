import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthForm.css';
import tripImage from './images/trip.png';
import campingImage from './images/camping.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AuthForm = ({ onAuth }) => {
  const navigate = useNavigate();
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  // Separate states for Sign In and Sign Up
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const handleSignInClick = () => setIsSignUpMode(false);
  const handleSignUpClick = () => setIsSignUpMode(true);

  // Handle login with fixed credentials
  const handleLogin = (e) => {
    e.preventDefault();
    if (signInUsername === "123" && signInPassword === "123") {
      onAuth();
      navigate("/dashboard");  // Navigate after successful login
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          
          {/* Sign In Form */}
          <form className="sign-in-form" onSubmit={handleLogin}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input 
                type="text" 
                placeholder="Username" 
                value={signInUsername} 
                onChange={(e) => setSignInUsername(e.target.value)} 
                required
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input 
                type="password" 
                placeholder="Password" 
                value={signInPassword} 
                onChange={(e) => setSignInPassword(e.target.value)} 
                required
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>
        </div>
      </div>

      {/* Panels for UI Animation */}
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New Here?</h3>
            <p>Use the default credentials to log in.</p>
            <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
          <img src={tripImage} className="image" alt="Trip illustration" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>Already have an account?</h3>
            <p>Sign in to continue your journey.</p>
            <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <img src={campingImage} className="image" alt="Camping illustration" />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
