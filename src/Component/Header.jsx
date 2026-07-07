import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  let [mobiletype, setMobiletype] = useState(false);

  const handelMobilesite = () => {
    setMobiletype(!mobiletype);
  };
  return (
    <>
      <div className="nav_contenar">
        <div className="nav_imgcontenar">
          <div>
            <img src="nav_image.png" className="nav_img" />
          </div>
          <div className="nav_text">
            <p>FloraVision.</p>
          </div>
        </div>
        <nav className={mobiletype ? "menuMobile" : "menuWeb"}>
          <ul className="nav_item">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/type">Plant type</Link>
            </li>
            <li>
              <Link to="/">More</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="nav_buttoContenar">
          <button className="nav_buttonitem">
            <IoIosSearch className="nav_button" />
          </button>

          <button className="nav_buttonitem">
            <Link to="/bag">
              <span className="">
                <IoBagHandleOutline className="nav_button" />
              </span>
            </Link>
          </button>

          <button
            onClick={handelMobilesite}
            className="nav_mobileicon nav_buttonitem"
          >
            <IoReorderThreeOutline className="nav_button" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
