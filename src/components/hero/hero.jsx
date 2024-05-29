import React from "react";
import "./hero.css";
import Dark_arrow from "../../assets/dark-arrow.png";

function hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h2>A PROJECT OF FREE EDUCATION FOR ALL</h2>
         <h3>AND</h3>
        <h1>SOFTWERE HOUSE</h1>
        <p>
          Embrace the future with forward-thinking innovation and cutting-edge digital solutions, unlocking the full potential of your business and propelling it towards unprecedented success.
        </p>
        <button className="btn">
          Explore more <img src={Dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default hero;
