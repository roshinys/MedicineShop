import { useContext } from "react";
import "./App.css";
import MedicineForm from "./Components/Medicine/MedicineForm";
import MedicineList from "./Components/Medicine/MedicineList";
import Header from "./Components/Layout/Header";
import CartContext from "./Store/cart-context";
import Cart from "./Components/Cart/Cart";

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
