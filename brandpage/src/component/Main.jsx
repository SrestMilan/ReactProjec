import React from "react";
import image2 from "../assets/hero-image.png";

const Main = () => {
  return (
    <div className="main-section">
      <div className="main-header header1">
        <span className="header-span">
          Your Feet <br></br>Deserve<br></br> The Best
        </span>
      </div>
      <div className="main-header imagesrc">
        <img src={image2} alt="shoes" className="image" />
      </div>
      <div className="main-header secondary-header">
        <span className="secondary-header2">
          Your Feet Deserve The Best And We're Here <br></br> To Help You And
          Always Be Welcome
        </span>
      </div>

      <div className="main-header btn-shop">
        <button className="shop">Shop Now</button>
        <button className="category">Category</button>
      </div>

      <div className="main-header avai">
        <p>Also Available on:</p>
        <ul>
          <li>Amazon</li>
          <li>FlipCart</li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
