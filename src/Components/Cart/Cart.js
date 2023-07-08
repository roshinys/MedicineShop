import React from "react";
import Modal from "../UI/Modal/Modal";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";

function Cart() {
  return (
    <Modal>
      <CartItems />
      <CartSummary />
    </Modal>
  );
}

export default Cart;
