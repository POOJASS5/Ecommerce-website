import React, { useState, useContext } from "react";
import Cart from "../cart/Cart";
import CartIcon from "../cart/CartIcon";
import cartContext from "../store/cart-Context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  const cartCtx = useContext(cartContext);

  let cartQuantity = 0;

  cartCtx.item.forEach((item) => {
    cartQuantity += item.quantity;
  });
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
        <span className={classes.badge}>{cartQuantity}</span>
      </button>
      {showCartItem && <Cart />}
    </>
  );
};
export default HeaderCartButton;