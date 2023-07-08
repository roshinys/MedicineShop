import React, { useState } from "react";
import CartContext from "./cart-context";

const DUMMY_CART = [
  {
    id: 1,
    title: "dolo",
    price: 12,
    quantity: 2,
  },
  {
    id: 2,
    title: "paracetmol",
    price: 15,
    quantity: 1,
  },
];

const CartContextProvider = (props) => {
  const [cart, setCart] = useState(false);
  const [cartItems, setCartItems] = useState(DUMMY_CART);

  const cartOpenHander = () => {
    setCart(true);
  };
  const cartCloseHander = () => {
    setCart(false);
  };

  const addCartItemHandler = (cartItem) => {
    setCartItems((prevState) => {
      const oldCart = [...prevState];
      const existingCart = oldCart.find((cart) => cart.id === cartItem.id);
      if (existingCart) {
        return oldCart.map((cart) => {
          if (cart.id === cartItem.id) {
            return { ...cart, quantity: cart.quantity + parseInt(1) };
          }
          return cart;
        });
      }
      const newCart = {
        id: cartItem.id,
        title: cartItem.medicineName,
        price: cartItem.price,
        quantity: parseInt(1),
      };
      return [...oldCart, newCart];
    });
  };

  return (
    <CartContext.Provider
      value={{
        isCart: cart,
        openCart: cartOpenHander,
        closeCart: cartCloseHander,
        cartItems: cartItems,
        addCartItem: addCartItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
