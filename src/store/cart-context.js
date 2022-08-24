import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
  addItemFromCart: (item) => {},

  message: "",
});

export default CartContext;
