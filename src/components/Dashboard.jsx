import { useState } from "react";
import { FaBars, FaSearch, FaUser, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Ensure React Router is installed
import "./dashboard.css";
import logo from "./logo.png";

const Dashboard = () => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive((prev) => !prev);
  const closeMenu = () => setMenuActive(false);

  return (
    <header>
      <div id="menu-bar" className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>

      <a href="#" className="logo">
        <img src={logo} alt="Travel Logo" className="logo-img" style={{ width: "100px", height: "auto", marginLeft: "10px" }} />
      </a>

      <nav className={`navbar ${menuActive ? "active" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#book" onClick={closeMenu}>Book</a>
        <a href="#packages" onClick={closeMenu}>Packages</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#gallery" onClick={closeMenu}>Gallery</a>
        <a href="#review" onClick={closeMenu}>Review</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

      <div className="icons">
        <FaSearch id="search-btn" />
        <FaUser id="login-btn" />
      </div>

      <form className="search-bar-container">
        <input type="search" id="search-bar" placeholder="Search here..." />
        <label htmlFor="search-bar">
          <FaSearch />
        </label>
      </form>
    </header>
  );
};

const Home = () => {
  const videoFiles = ["vid-1.mp4", "vid-2.mp4", "vid-3.mp4", "vid-4.mp4", "vid-5.mp4"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % videoFiles.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + videoFiles.length) % videoFiles.length);

  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Adventure is worthwhile</h3>
        <p>Discover new places with us, adventure awaits</p>
        <button className="btn" onClick={() => navigate("/profile")}>Discover more</button>
      </div>

      <div className="video-container">
        <button className="nav-btn left" onClick={handlePrev}>
          <FaArrowLeft />
        </button>
        <video 
          key={currentIndex}  
          src={`/images/${videoFiles[currentIndex]}`} 
          id="video-slider" 
          loop 
          autoPlay 
          muted
        ></video>
        <button className="nav-btn right" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

const Booking = () => {
  const [formData, setFormData] = useState({ place: "", guests: "", arrival: "", leaving: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
  };

  return (
    <section className="book" id="book">
      <h1 className="heading">Book Now</h1>
      <div className="row">
        <div className="image">
          <img src="images/camping.png" alt="Booking Illustration" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <h3>Where to</h3>
            <input type="text" name="place" placeholder="Place name" value={formData.place} onChange={handleChange} required />
          </div>
          <div className="inputBox">
            <h3>How many</h3>
            <input type="number" name="guests" placeholder="Number of guests" value={formData.guests} onChange={handleChange} required />
          </div>
          <div className="inputBox">
            <h3>Arrivals</h3>
            <input type="date" name="arrival" value={formData.arrival} onChange={handleChange} required />
          </div>
          <div className="inputBox">
            <h3>Leaving</h3>
            <input type="date" name="leaving" value={formData.leaving} onChange={handleChange} required />
          </div>
          <input type="submit" className="btn" value="Book Now" />
        </form>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Dashboard />
      <Home />
      <Booking />
    </div>
  );
};

export default App;
