import CardData from "./CardData";
import { carditem } from "../Store/CardItem";
import "./Card.css";
function Card() {
  return (
    <>
      <h1 className="card_main_heading">Our Top Selling Plants</h1>
      <div className="card_main">
        {carditem.map((card) => (
          <CardData card={card}> {card}</CardData>
        ))}
      </div>
    </>
  );
}

export default Card;
