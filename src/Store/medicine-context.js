import React from "react";

const MedicineContext = React.createContext({
  medicineList: [],
  addMedicine: (medicine) => {},
  changeQuantity: (id) => {},
});

export default MedicineContext;
