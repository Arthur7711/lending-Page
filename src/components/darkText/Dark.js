import React from "react";
import styles from "./Dark.module.css";

const Dark = (props) => {
  return (
    <div className={styles.dark}>
      <p>{props.text} </p>
    </div>
  );
};

export default Dark;
