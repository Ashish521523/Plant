import "./Bag.css";
import { MdDelete } from "react-icons/md";
import { Bagitem } from "./BagStore";
import { useContext } from "react";

function Bag() {
  const { additem, handelDeleteitem } = useContext(Bagitem);
  return (
    <div className="bag_main_contenar">
      <h1>Total Items: {additem.length}</h1>
      {additem.map((item) => (
        <div className="bag_contenar">
          <img src={item.image} className="bag_img" />
          <div className="bagitem_contenar">
            <div>
              <h3 className="bag_item_name">{item.plantName}</h3>
              <p className="bagitem_price">Rs.{item.Rs}</p>
              <p className="bag_item_return">14 days return available</p>
              <p className="bag_item_return">Delivery by 17 JUNE 2026</p>
            </div>
            <span onClick={() => handelDeleteitem(item)}>
              <MdDelete className="bag_button" />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bag;
