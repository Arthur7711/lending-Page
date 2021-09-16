import React from "react";
import Ext from "../ext/Ext";
import styles from "./BluePart.module.css";
import { useTranslation } from "react-i18next";

const BluePart = () => {
  const { t } = useTranslation();

  const infoPart = [
    {
      title: t("inf1Title"),
      text: t("inf1Text"),
    },
    {
      title: t("inf2Title"),
      text: t("inf2Text"),
    },
    {
      title: t("inf3Title"),
      text: t("inf3Text"),
    },
    {
      title: t("inf4Title"),
      text: t("inf4Text"),
    },
  ];
  return (
    <main className={styles.main}>
      {infoPart.map((el, i) => (
        <Ext key={i} title={el.title} text={el.text} />
      ))}
    </main>
  );
};

export default BluePart;
