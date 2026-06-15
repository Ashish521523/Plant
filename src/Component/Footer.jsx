import React from "react";
import './Footer.css'

function Footer() {
  return (
    <>
      <footer className="footer_contenar">
        <div>
          <div className="footer_img_heading">
            <img src="nav_image.png" className="footer_img"/>
            <p>FloraVision.</p>
          </div>

          <p className="footer_about">
            "From lush indoor greens to vibrant <br /> outdoor blooms, our
            plants are crafted to <br /> thrive and elevate your living
            environment."
          </p>

          <div className="footer_list">
            <ul >
              <li >FB</li>
              <li >TW</li>
              <li >LI</li>
            </ul>
          </div>
        </div>

        <div className="footer_list1">
          <h3>Quick Link's</h3>
          <ul >
            <li >Home </li>
            <li >Type's of plant's</li>
            <li >Contact</li>
            <li >Privacy</li>
          </ul>
        </div>

        <div>
          <h3>For Every Update.</h3>
          <div className="footer_button">
            <input type="text" placeholder="EnterEmail"  />
            <button >
              SUBSCRIBE
            </button>
          </div>
          <p className="footer_about1">FloraVision © all right reserve</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
