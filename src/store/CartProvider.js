import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [totalAmount, updateTotalAmount] = useState(0);

  const addItemToCartHandler = (addItem) => {
    const index = items.findIndex((item) => item.id === addItem.id);
    // console.log(index);
    const existingCartItem = items[index];
    // console.log("Adding item...", existingCartItem);
    let updatedItems;
    if (index > -1) {
      //   console.log("Item exists");
      const updatedItem = {
        ...existingCartItem,
        quantity: +existingCartItem.quantity + 1,
      };
      //   console.log(updatedItem);
      updatedItems = [...items];
      updatedItems[index] = updatedItem;
      //   console.log(updatedItems);
      updateItems(updatedItems);
    } else {
      updateItems([...items, addItem]);
    }

    updateTotalAmount(totalAmount + addItem.price * addItem.quantity);
  };

  const addItemFromCartHandler = (addItem) => {
    const index = items.findIndex((item) => item.id === addItem.id);
    // console.log(index);
    const existingCartItem = items[index];
    // console.log("Adding item...", existingCartItem);
    let updatedItems;

    //   console.log("Item exists");
    const updatedItem = {
      ...existingCartItem,
      quantity: +existingCartItem.quantity + 1,
    };
    //   console.log(updatedItem);
    updatedItems = [...items];
    updatedItems[index] = updatedItem;
    //   console.log(updatedItems);
    updateItems(updatedItems);
    updateTotalAmount(totalAmount + addItem.price);
  };

  const removeItemFromCartHandler = (remItem) => {
    updateTotalAmount(totalAmount - remItem.price);
    const index = items.findIndex((item) => item.id === remItem.id);
    const existingCartItem = items[index];
    console.log("removing item...", existingCartItem);
    let updatedItems;
    console.log("before removing", remItem.quantity);

    if (index > -1 && Number(remItem.quantity) > 1) {
      const updatedItem = {
        ...existingCartItem,
        quantity: +remItem.quantity - 1,
      };
      console.log("after removing...", updatedItem);
      updatedItems = [...items];
      updatedItems[index] = updatedItem;

      updateItems(updatedItems);
    } else {
      let changeItems = [...items];
      updatedItems = [
        ...changeItems.slice(0, index),
        ...changeItems.slice(index + 1, items.length),
      ];

      console.log("if only one item present to remove...", updatedItems);
      updateItems(updatedItems);
    }
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    addItemFromCart: addItemFromCartHandler,
    removeItem: removeItemFromCartHandler,

    message: ", Click here",
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
