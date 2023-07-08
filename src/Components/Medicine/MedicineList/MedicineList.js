import React, { useContext } from "react";
import MedicineContext from "../../../Store/Medicine/medicine-context";
import MedicineItem from "../MedicineItem/MedicineItem";
import styles from "./MedicineList.module.css";

function MedicineList() {
  const medCtx = useContext(MedicineContext);
  const medList = [...medCtx.medicineList];
  return (
    <ul className={styles.lists}>
      {medList.map((med) => {
        return <MedicineItem key={med.id} medicine={med} />;
      })}
    </ul>
  );
}

export default MedicineList;
