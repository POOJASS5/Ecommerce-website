import React, { useState } from "react";
import Cart from "../cart/Cart";
import CartIcon from "../cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  const [showCartItem, setShowCartItem] = useState(false);

  const cartItemHandler = () => {
    setShowCartItem(true);
  };
  return (
    <>
      <button className={classes.button} onClick={cartItemHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Cart</span>
        <span className={classes.badge}>0</span>
      </button>
      {showCartItem && <Cart />}
    </>
  );
};

export default HeaderCartButton;