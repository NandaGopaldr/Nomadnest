import { useState } from 'react';
import '../styles/AuthForm.css';
import tripImage from './images/trip.png';
import campingImage from './images/camping.png';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import { useNavigate } from "react-router-dom";
import '../components/Dashboard';

const AuthForm = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const navigate = useNavigate();
  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "124") {
      navigate("/dashboard");  // Navigate to Dashboard if credentials are correct
    } else {
      alert("Invalid username or password");
    }
  };
  

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className="sign-in-form"  onSubmit={handleLogin}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <input type="submit" value="Login" className="btn solid" onClick={handleLogin} />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i> {/* Corrected Facebook icon name */}
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>

          <form action="" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign Up" className="btn solid" />

            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i> {/* Corrected Facebook icon name */}
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New Here</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, maxime magni veritatis perferendis velit, excepturi impedit voluptatem aliquam ratione hic eos earum.
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>

          <img src={tripImage} className="image" alt="Trip illustration" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, maxime magni veritatis perferendis velit, excepturi impedit voluptatem aliquam ratione hic eos earum.
            </p>
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

