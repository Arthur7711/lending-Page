import React from "react";
import LogoPart from "../logoPart/LogoPart";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <LogoPart />
      <div className={styles.languageArea}>
        <div className={styles.eng}>Eng</div>
        <div className={styles.itl}>Itl</div>
        <div className={styles.btn}>
          <p>Book a call</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
