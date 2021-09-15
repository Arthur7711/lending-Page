import React from "react";
import LogoPart from "../logoPart/LogoPart";
import AlertDialog from "../popover/Popover";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <LogoPart />
      <div className={styles.languageArea}>
        <div className={styles.eng}>Eng</div>
        <div className={styles.itl}>Itl</div>
        <AlertDialog widthP="144px" heightP="38px" fontP="16px" />
      </div>
    </div>
  );
};

export default Header;
