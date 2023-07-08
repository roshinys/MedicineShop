import React, { useContext } from "react";
import CartContext from "../../Store/cart-context";

function Header() {
  const cartCtx = useContext(CartContext);
  const cartClickHandler = (e) => {
    console.log(e.target);
    cartCtx.openCart();
  };
  return (
    <div>
      <h5>Medicine Shop</h5>
      <button onClick={cartClickHandler}>Cart</button>
    </div>
  );
}

export default Header;
