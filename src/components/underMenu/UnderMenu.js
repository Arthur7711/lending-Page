import { useState } from "react";
import styles from "./UnderMenu.module.css";
import { useTranslation } from "react-i18next";

const UnderMenu = () => {
  const { t } = useTranslation();

  const hrefs = [
    { id: 0, title: t("Link1") },
    { id: 1, title: t("Link2") },
    { id: 2, title: t("Link3") },
    { id: 3, title: t("Link4") },
    { id: 4, title: t("Link5") },
    { id: 5, title: t("Link6") },
  ];

  const inform = [
    t("inform1"),
    t("inform2"),
    t("inform3"),
    t("inform4"),
    t("inform5"),
    t("inform6"),
  ];
  const [info, setInfo] = useState(inform[0]);
  const [ind, setInd] = useState("0 1");

  function changeInfo(id) {
    setInfo(inform[id]);
    setInd(`0 ${id + 1}`);
  }
  return (
    <div className={styles.infoPart}>
      <div className={styles.links}>
        {hrefs.map((el) => (
          <p onClick={() => changeInfo(el.id)} key={el.id}>
            {el.title}
          </p>
        ))}
      </div>
      <div className={styles.textPart}>
        <p>{ind}</p>
        <div className={styles.likeP}>{info}</div>
      </div>
    </div>
  );
};

export default UnderMenu;
