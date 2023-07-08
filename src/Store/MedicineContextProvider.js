import React, { useState } from "react";
import MedicineContext from "./medicine-context";

const DUMMY_MED = [
  {
    id: 1,
    medicineName: "dolo",
    description: "fever usage",
    price: "12",
    quantity: 100,
  },
  {
    id: 2,
    medicineName: "paracetmol",
    description: "fever usage",
    price: "15",
    quantity: 10,
  },
];

function MedicineContextProvider(props) {
  const [medList, setMedList] = useState(DUMMY_MED);

  const addMedicineHandler = (medicine) => {
    setMedList((prevState) => {
      const medList = [...prevState];
      medList.push(medicine);
      return medList;
    });
  };

  const changeQuantityHandler = (id) => {
    setMedList((prevState) => {
      const medList = [...prevState];
      const existingMed = medList.some((med) => med.id === id);
      if (existingMed) {
        return medList.map((med) => {
          if (med.id === id && med.quantity !== 0) {
            const quantity = parseInt(med.quantity) - 1;
            return { ...med, quantity: quantity };
          }
          return med;
        });
      }
      return prevState;
    });
  };

  return (
    <MedicineContext.Provider
      value={{
        medicineList: medList,
        addMedicine: addMedicineHandler,
        changeQuantity: changeQuantityHandler,
      }}
    >
      {props.children}
    </MedicineContext.Provider>
  );
}

export default MedicineContextProvider;
