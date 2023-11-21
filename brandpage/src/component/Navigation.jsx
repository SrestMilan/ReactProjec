import React from "react";
import image1 from "../assets/nike.jpeg";

const Navigation = () => {
  return (
    <div className="parent-navigation">
      <nav>
        <span>
          <img src={image1} alt="img" className="child-navigation child1" />
        </span>
        <div className="child-navigation child2">
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Location</li>
          </ul>
        </div>
        <div className="child-navigation child3">
          <button className="nav-button">Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
