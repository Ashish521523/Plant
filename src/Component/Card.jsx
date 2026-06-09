import CardData from "./CardData";
import { carditem } from "../Store/CardItem";
import "./Card.css";
function Card() {
  return (
    <div className="card_main">
      {carditem.map((card) => (
        <CardData card={card}> {card}</CardData>
      ))}
    </div>
  );
}

export default Card;
