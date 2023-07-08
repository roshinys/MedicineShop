import { useContext } from "react";
import "./App.css";
import MedicineForm from "./Components/Medicine/MedicineForm/MedicineForm";
import MedicineList from "./Components/Medicine/MedicineList/MedicineList";
import Header from "./Components/Layout/Header/Header";
import CartContext from "./Store/Cart/cart-context";
import Cart from "./Components/Cart/Cart/Cart";

function App() {
  const cartCtx = useContext(CartContext);
  return (
    <>
      {cartCtx.isCart && <Cart />}
      <Header />
      <MedicineForm />
      <MedicineList />
    </>
  );
}

export default App;
