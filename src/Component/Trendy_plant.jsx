import React from "react";
import { IoBagHandle } from "react-icons/io5";
import "./Trendy_plant.css";

function Trendy_plant() {
  return (
    <div className="main_plant_contenar">
      <h1 className="plant_heading">Our Trendy plants</h1>
      <div className="plantContenar">
        <img src="image3.png" className="trendy_img  trendy_img1" />
        <div className="plant_about plant_about1">
          <h1 className="plant_name plant_name1">For Your Desks Decorations</h1>
          <p className="trendy_about">
            I recently added a beautiful desk decoration plant to my workspace,
            and it has made such a positive difference!
          </p>

          <p className="plant_price">Rs. 599/-</p>

          <div className="button_icon_contenar">
            <button className="plant_button">Explore</button>
            <div>
              <IoBagHandle className="plant_icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="plantContenar1">
        <div className="plant_about  plant_about2">
          <h1 className="plant_name  plant_name2">For Your Desks Decorations</h1>
          <p className="trendy_about">
            The greenery adds a touch of nature and serenity to my desk, making
            it feel more inviting and calming
          </p>

          <p className="plant_price">Rs. 399/-</p>

          <div className="button_icon_contenar">
            <button className="plant_button">Explore</button>
            <div>
              <IoBagHandle className="plant_icon" />
            </div>
          </div>
        </div>

        <img src="image4.png" className="trendy_img  trendy_img2" />
      </div>
    </div>
  );
}

export default Trendy_plant;
