import React from "react";
import heroImg from "../../img/heroImg.png";
import heroImg2 from "../../img/heroImg2.png";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <img src={heroImg} alt="" />
        <div className="flex justify-center items-center">
          <h2>Testimonials Left</h2>
          <div>42</div>
        </div>
        <img src={heroImg2} alt="" />
      </div>
    </div>
  );
}
