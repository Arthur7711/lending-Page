import styles from "./TopMain.module.css";
import imgLog from "../../imgs/shuttle.png";

const TopMain = () => {
  return (
    <div className={styles.topMain}>
      <p className={styles.info}>we buy brands</p>
      <div className={styles.imgBox}>
        <img alt="imgLog" src={imgLog} />
      </div>
    </div>
  );
};

export default TopMain;
