import { createContext, useReducer } from "react";

export let Bagitem = createContext();

const handelReducer = (current, action) => {
  if (action.type === "ADD_ITEM") {
    return [...current, action.payload];
  } else if (action.type === "DELETE_ITEM") {
    return current.filter((items) => items != action.payload.remove);
  }

  return current;
};

const HandelBagitem = ({ children }) => {
  const [additem, dispatchAdditem] = useReducer(handelReducer, []);

  const handelAdditem = (item) => {
    dispatchAdditem({
      type: "ADD_ITEM",
      payload: item,
    });
  };

  const handelDeleteitem = (remove) => {
    dispatchAdditem({
      type: "DELETE_ITEM",
      payload: {
        remove,
      },
    });
  };

  return (
    <Bagitem.Provider value={{ additem, handelAdditem, handelDeleteitem }}>
      {children}
    </Bagitem.Provider>
  );
};

export default HandelBagitem;
