import React from "react";
import LogoPart from "../logoPart/LogoPart";
import SimplePopover from "../popover/Popover";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <LogoPart />
      <div className={styles.languageArea}>
        <div className={styles.eng}>Eng</div>
        <div className={styles.itl}>Itl</div>
        <SimplePopover />
      </div>
    </div>
  );
};

export default Header;
