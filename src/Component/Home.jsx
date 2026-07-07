import React from "react";
import { TbPlayerPlayFilled } from "react-icons/tb";
import "./Home.css";

function Home() {
  return (
    <div className="main_contenar">
      <div className="home_contenar12">
        <div className="home_heading">
          <h1 className="heading">Earth’s Exhale</h1>
          <p className="home_about">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's
            natural environment and its essential role in sustaining life.
          </p>

          <div className="button_contenar">
            <butto className="home_button">Buy Now</butto>

            <div className="home_play">
              <TbPlayerPlayFilled className="play" />
            </div>
            <p className="butto_about">live Demo...</p>
          </div>
        </div>

        <div className="home_contenar2">
          <div className="image_content">
            <img src="image2.png" className="home_img" />
            <p className="name_content">Ronnie Hamill</p>
          </div>
          <p className="contenar_about">
            I can't express how thrilled I am with my new natural plants! They
            bring such a fresh and vibrant energy to my home.
          </p>
        </div>
      </div>

      <div className="home_contenar3">
        <img src="image1.png" className="home_img1" />
        <p className="item_name">Indoor Plant </p>
        <p className="plant_name">Aglaonema plant</p>

        <button className="button_item">Buy Now</button>
      </div>
    </div>
  );
}

export default Home;
