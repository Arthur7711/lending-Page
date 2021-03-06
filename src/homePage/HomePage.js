import BlueParth from "../components/bluePart/BluePart";
import Contact from "../components/contact/Contact";
import Dark from "../components/darkText/Dark";
import Header from "../components/header/Header";
import IntPart from "../components/intpart/IntPart";
import Slider from "../components/slider/Slider";
import TopMain from "../components/topMain/TopMain";
import UnderMenu from "../components/underMenu/UnderMenu";
import logo from "../imgs/shuttle.png";
import styles from "./HomePage.module.css";
import imgLog from "../imgs/shuttle.png";
import AlertDialog from "../components/popover/Popover";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  const info = [
    { text: t("it1"), color: "blue" },
    { text: t("it2"), color: "red" },
    { text: t("it3"), color: "orange" },
    { text: t("it4"), color: "blue" },
    { text: t("it5"), color: "orange" },
    { text: t("it6"), color: "blue" },
    { text: t("it7"), color: "red" },
    { text: t("it8"), color: "blue" },
    { text: t("it9"), color: "orange" },
    { text: t("it10"), color: "blue" },
    { text: t("it11"), color: "red" },
  ];
  return (
    <div className={styles.home}>
      <Header />
      <TopMain />
      <div className={styles.relet}>
        <div className={styles.imgBox}>
          <img alt="imgLog" src={imgLog} />
        </div>
        <p className={styles.text}>{t("homeText1")}</p>
        <p className={styles.text2}>{t("homeText2")}</p>
      </div>
      <div className={styles.underdev}>
        <p className={styles.forThisP}>{t("curious")}</p>
        <AlertDialog widthP="285px" heightP="60px" fontP="24px" />
      </div>
      <Dark text={t("dark1")} />
      <div className={styles.forSlide}>
        <Slider info={info} />
      </div>
      <Dark text={t("dark2")} />
      <BlueParth />
      <Dark text={t("dark3")} />
      <IntPart />
      <Dark text={t("dark4")} />
      <UnderMenu />
      <Dark text={t("dark5")} />
      <Contact />
      <footer>
        <div className={styles.logoArea}>
          <div className={styles.forLogo}>
            <img alt="logo" src={logo} />
          </div>
          <p className={styles.textArea}>
            E<span>quire</span>
          </p>
        </div>
        <div className={styles.footerPartDivs}>
          <div>
            <div className={styles.forFooterA}>
              <a href="https://icarex.ai/privacy-policy/">
                Privacy Policy & Terms of Use
              </a>
            </div>
            <div className={styles.forFooterA}>
              <a href="https://icarex.ai/note-legali/">Legal Notes</a>
            </div>
          </div>
          <div>
            <p>An iCareX SRL project ?? iCareX SRL All rights reserved.</p>
            <p>P.IVA: IT11597630968</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
