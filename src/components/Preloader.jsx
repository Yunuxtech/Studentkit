// Preloader.jsx
import React from "react";
import "../style/Preloader.css"; // Import the corresponding CSS file for styling
import LoaderImg from "../images/SimpleInterest.png";
const Preloader = () => {
  return (
    <div className="preloader">
      <img src={LoaderImg} alt="Loading" />
      <p>Loading StudentKit...</p>
    </div>
  );
};

export default Preloader;
