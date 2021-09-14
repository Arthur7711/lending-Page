import React from "react";
import styles from "./RightPart.module.css";

const RightPart = (props) => {
  return (
    <div className={styles.right}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default RightPart;
