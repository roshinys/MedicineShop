import React, { useContext } from "react";
import CartContext from "../../../Store/Cart/cart-context";
import styles from "./Header.module.css";

function Header() {
  const cartCtx = useContext(CartContext);
  const cartClickHandler = (e) => {
    console.log(e.target);
    cartCtx.openCart();
  };
  return (
    <header className={styles.header}>
      <h5 className={styles.heading}>Medicine Shop</h5>
      <button className={styles.button} onClick={cartClickHandler}>
        Cart
      </button>
    </header>
  );
}

export default Header;
