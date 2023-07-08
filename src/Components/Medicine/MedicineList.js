import React, { useContext } from "react";
import MedicineContext from "../../Store/medicine-context";
import MedicineItem from "./MedicineItem";

function MedicineList() {
  const medCtx = useContext(MedicineContext);
  const medList = [...medCtx.medicineList];
  return (
    <ul>
      {medList.map((med) => {
        return <MedicineItem key={med.id} medicine={med} />;
      })}
    </ul>
  );
}

export default MedicineList;
