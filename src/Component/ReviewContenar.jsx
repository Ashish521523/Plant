import React from "react";
import Review from "./Review";
import { review } from "../Store/ReviewData";

function ReviewContenar() {
  return (
    <>
      <h1 className="review_heading">Customer Review</h1>
      <div className="review_main_contenar">
        {review.map((item) => (
          <Review item={item}> {item}</Review>
        ))}
      </div>
    </>
  );
}

export default ReviewContenar;
