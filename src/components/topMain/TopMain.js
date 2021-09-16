import styles from "./TopMain.module.css";
import { useTranslation } from "react-i18next";

const TopMain = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.topMain}>
      <p className={styles.info}>{t("top")}</p>
    </div>
  );
};

export default TopMain;
