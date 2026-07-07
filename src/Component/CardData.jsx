import { IoBagHandleOutline } from "react-icons/io5";
import "./Card.css";
import { useContext } from "react";
import { Bagitem } from "./BagStore";
import { useNavigate } from "react-router-dom";
function CardData({ card }) {
  const { handelAdditem } = useContext(Bagitem);
  const navigate = useNavigate();
  return (
    <>
      <div className="card_All">
        <div className="cardItem">
          <img src={card.image} className="img_contenar" />
          <div className="card_About">
            <h1 className="card_heading">{card.plantName}</h1>
            <p className="Card_about">{card.about}</p>
            <div className="card_pc">
              <p className="card_price"> Rs. {card.Rs}/-</p>
              <span
                className="card_bag_proparti"
                onClick={() => {
                  handelAdditem(card);
                  navigate("/bag");
                }}
              >
                <IoBagHandleOutline className="card_bag" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardData;
