import styles from "./MyButton.module.css";
import { useTranslation } from "react-i18next";

export default function MyButton(props) {
  const { t } = useTranslation();

  return (
    <div
      style={{ width: props.widthP, heightP: props.heightP }}
      onClick={props.fn()}
      className={styles.btn}
    >
      <p style={{ fontSize: props.fontP }}>{t("buttonText")}</p>
    </div>
  );
}
