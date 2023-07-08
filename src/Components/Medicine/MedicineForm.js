import React, { useEffect, useReducer, useContext } from "react";
import Input from "../UI/Input";
import MedicineContext from "../../Store/medicine-context";

const medicineReducer = (state, action) => {
  switch (action.type) {
    case "SET_MEDICINE_NAME":
      return {
        ...state,
        medicineName: action.payload,
        medicineValid: action.payload.length > 3,
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: action.payload,
        descriptionValid: action.payload.length > 3,
      };
    case "SET_PRICE":
      return {
        ...state,
        price: action.payload,
        priceValid: Number(action.payload) > 0,
      };
    case "SET_QUANTITY":
      return {
        ...state,
        quantity: action.payload,
        quantityValid: Number(action.payload) > 0,
      };
    case "SET_FORM_VALID":
      return {
        ...state,
        formValid:
          state.medicineValid &&
          state.descriptionValid &&
          state.priceValid &&
          state.quantityValid,
      };
    default:
      return state;
  }
};

function MedicineForm() {
  const initialState = {
    medicineName: "",
    description: "",
    price: "",
    quantity: "",
    medicineValid: false,
    descriptionValid: false,
    priceValid: false,
    quantityValid: false,
    formValid: false,
  };
  const medCtx = useContext(MedicineContext);
  const [medicineState, dispatch] = useReducer(medicineReducer, initialState);

  useEffect(() => {
    dispatch({ type: "SET_FORM_VALID" });
  }, [
    medicineState.medicineValid,
    medicineState.descriptionValid,
    medicineState.priceValid,
    medicineState.quantityValid,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (medicineState.formValid) {
      const medicine = {
        id: Math.random(),
        medicineName: medicineState.medicineName,
        description: medicineState.description,
        price: medicineState.price,
        quantity: parseInt(medicineState.quantity),
      };
      medCtx.addMedicine(medicine);
      dispatch({ type: "SET_MEDICINE_NAME", payload: "" });
      dispatch({ type: "SET_DESCRIPTION", payload: "" });
      dispatch({ type: "SET_PRICE", payload: "" });
      dispatch({ type: "SET_QUANTITY", payload: "" });
      return;
    }
    alert("form not valid");
  };

  const nameChangeHandler = (e) => {
    dispatch({ type: "SET_MEDICINE_NAME", payload: e.target.value });
  };

  const descriptionChangeHandler = (e) => {
    dispatch({ type: "SET_DESCRIPTION", payload: e.target.value });
  };
  const priceChangeHandler = (e) => {
    dispatch({ type: "SET_PRICE", payload: e.target.value });
  };
  const quantityChangeHandler = (e) => {
    dispatch({ type: "SET_QUANTITY", payload: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Medicine Name"
        type="text"
        value={medicineState.medicineName}
        onChange={nameChangeHandler}
      />
      <Input
        label="Description"
        type="text"
        value={medicineState.description}
        onChange={descriptionChangeHandler}
      />
      <Input
        label="Price"
        type="number"
        value={medicineState.price}
        onChange={priceChangeHandler}
      />
      <Input
        label="Quantity Available"
        type="number"
        value={medicineState.quantity}
        onChange={quantityChangeHandler}
      />
      <button type="submit">Add Medicine</button>
    </form>
  );
}

export default MedicineForm;
