import React from "react";
import Ext from "../ext/Ext";
import styles from "./BluePart.module.css";

const BluePart = () => {
  const infoPart = [
    {
      title: "Pay you more",
      text: "Whatever the value of your company is, we pay you up to 20% more",
    },
    {
      title: "Business continuity",
      text: "Our technology leaders will make your company flourish!",
    },
    {
      title: "Doing it quickly",
      text: "We cut out the unnecessary steps to make selling your company stress-free ",
    },
    {
      title: "Satisfied or reimbursed",
      text: "We kick-start the smart transformation during the due-diligence. If the deal won’t be made your company will worth a lot more, without having to pay for it",
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
