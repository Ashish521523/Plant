import { IoBagHandleOutline } from "react-icons/io5";
import "./Card.css";
function CardData({ card }) {
  return (
    <>
      <div className="card_All">
        <div className="cardItem">
          <img src={card.image} className="img_contenar" />
          <div className="card_About">
            <h1 className="card_heading">{card.plantName}</h1>
            <p className="Card_about">{card.about}</p>
            <div className="card_pc">
              <p className="card_price">{card.Rs}</p>
              <IoBagHandleOutline className="card_bag" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardData;
