import React from "react";
import Modal from "../../UI/Modal/Modal";
import CartItems from "../CartItem/CartItems";
import CartSummary from "../CartSummary/CartSummary";

function Cart() {
  return (
    <Modal>
      <CartItems />
      <CartSummary />
    </Modal>
  );
}

export default Cart;
