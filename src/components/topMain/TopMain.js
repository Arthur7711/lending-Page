import styles from "./TopMain.module.css";
import imgLog from "../../imgs/shuttle.png";

const TopMain = () => {
  return (
    <div className={styles.topMain}>
      <p className={styles.info}>we buy brands</p>
      <div>
        <img alt="imgLog" src={imgLog} />
      </div>
    </div>
  );
};

export default TopMain;
