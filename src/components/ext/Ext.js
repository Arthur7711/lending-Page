import React from "react";
import img1 from "../../imgs/checkedData.png";
import styles from "./Ext.module.css";

const Ext = (props) => {
  return (
    <div className={styles.ext}>
      <div className={styles.box}>
        <div className={styles.imgBox}>
          <img alt="checked" src={img1} />
        </div>
        <p className={styles.title}>{props.title}</p>
      </div>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
};

export default Ext;
