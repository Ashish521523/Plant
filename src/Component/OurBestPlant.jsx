import React from "react";
import './OurBestPlant.css'

function OurBestPlant() {
  return (
    <div className="card_main_heading">
    <h1 className="ourbest_main_heading">Our Best o2</h1>
    <div className="ourbest_contenar">
      <img src="image1.png" className="ourbest_img"/>
      <div>
        <h1 className="ourbest_heading">We Have Small And Best O2 Plants Collection’s</h1>
        <br/>
        <p className="ourbest_about">
          Oxygen-producing plants, often referred to as "O2 plants," are those
          that release oxygen into the atmosphere through the process of
          photosynthesis.
        </p>
        <br/>
        <p className="ourbest_about">
          Many plants can help filter out pollutants and toxins from the air,
          such as formaldehyde, benzene, and trichloroethylene. This makes the
          air cleaner and healthier to breathe.
        </p>
        <button className="ourbest_button">Explore </button>
      </div>
    </div>
    </div>
  );
}

export default OurBestPlant;
