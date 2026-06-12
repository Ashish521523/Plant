import React from "react";
import "./Review.css";
import { review } from "../Store/ReviewData";

function Review({ item }) {
  return (
    <>
      
      <div className="review_contenar">
        <div className="img_name_contenar">
          <img src={item.image} className="review_img" />
          <h2> {item.Name}</h2>
        </div>
        <p>{item.About}</p>
      </div>
    </>
  );
}

export default Review;
