import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmount = cartContext.totalAmount;
  const data = cartContext.items.map(({ id, name, price, quantity }) => (
    <li key={id}>
      {name}:${price * quantity}
    </li>
  ));

  console.log(totalAmount);
  const cartItems = <ul className={classes["cart-items"]}>{data}</ul>;

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
