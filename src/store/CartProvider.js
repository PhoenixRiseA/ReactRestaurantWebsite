import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [totalAmount, updateTotalAmount] = useState(0);
  const addItemToCartHandler = (item) => {
    updateItems([...items, item]);
    updateTotalAmount(totalAmount + item.price);
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    message: ", Click here",
  };

  return (
    <CartContext.Provider value={cartContext}>
      {console.log("inside addhandler", cartContext, "amount", totalAmount)}
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
