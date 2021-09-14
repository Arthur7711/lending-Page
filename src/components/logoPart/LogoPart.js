import logo from "../../imgs/shuttle.png";
import styles from "./LogoPart.module.css";

const LogoPart = () => {
  return (
    <div className={styles.logoArea}>
      <div className={styles.forLogo}>
        <img alt="logo" src={logo} />
      </div>
      <p className={styles.textArea}>
        E<span>quire</span>
      </p>
    </div>
  );
};

export default LogoPart;
