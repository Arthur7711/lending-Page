import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LogoPart from "../logoPart/LogoPart";
import AlertDialog from "../popover/Popover";
import styles from "./Header.module.css";

const Header = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const activeStyles = {
    color: "#fff",
    borderBottom: "2px solid #fff",
  };
  console.log(localStorage.getItem('en'));
  return (
    <div className={styles.header}>
      <LogoPart />
      <div className={styles.languageArea}>
        <div
          onClick={() => changeLanguage("en")}
          className={styles.eng}
          style={localStorage.i18nextLng==='en' ? activeStyles : null}
        >
          Eng
        </div>
        <div
          style={localStorage.i18nextLng==='it'  ? activeStyles : null}
          onClick={() => changeLanguage("it")}
          className={styles.itl}
        >
          Itl
        </div>
        <AlertDialog widthP="144px" heightP="38px" fontP="16px" />
      </div>
    </div>
  );
};

export default Header;
