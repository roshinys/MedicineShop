import React from "react";
import styles from "./Input.module.css";

function Input(props) {
  return (
    <div className={styles.div}>
      <label className={styles.label}>{props.label}:</label>
      <input
        className={styles.input}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
