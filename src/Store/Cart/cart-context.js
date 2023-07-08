import React from "react";

const CartContext = React.createContext({
  isCart: false,
  openCart: () => {},
  closeCart: () => {},
  cartItems: [],
  addCartItem: (amount, cartItem) => {},
});

export default CartContext;
