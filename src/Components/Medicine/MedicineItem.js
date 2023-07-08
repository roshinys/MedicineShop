import React, { useContext, useState } from "react";
import MedicineContext from "../../Store/medicine-context";
import CartContext from "../../Store/cart-context";
import styles from "./MedicineItem.module.css";

function MedicineItem(props) {
  const medCtx = useContext(MedicineContext);
  const cartCtx = useContext(CartContext);
  const [medAvailable, setMedAvailable] = useState(true);
  const updateQuantityHandler = () => {
    if (props.medicine.quantity === 0) {
      return;
    }
    if (props.medicine.quantity === 1) {
      setMedAvailable((prevState) => {
        return !prevState;
      });
    }
    medCtx.changeQuantity(props.medicine.id);
    cartCtx.addCartItem(props.medicine);
  };
  return (
    <li>
      <h5>{props.medicine.medicineName}</h5>
      <p>{props.medicine.description}</p>
      <p>${props.medicine.price}</p>
      <p>{props.medicine.quantity}</p>
      <button
        onClick={updateQuantityHandler}
        className={!medAvailable && styles["invalid"]}
      >
        {medAvailable ? "Add To Bill" : "Out Of Stock"}
      </button>
    </li>
  );
}

export default MedicineItem;
