import React, { useContext } from "react";
import CartContext from "../../Store/cart-context";
import CartSingleItem from "./CartSingleItem";

function CartItems() {
  const ctx = useContext(CartContext);

  return (
    <ul>
      {ctx.cartItems.map((cart) => {
        return <CartSingleItem cart={cart} key={cart.id} />;
      })}
    </ul>
  );
}

export default CartItems;
