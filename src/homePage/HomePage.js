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

const HomePage = () => {
  const info = [
    { text: "Blockchin technology", color: "blue" },
    { text: "Artificial inteligence", color: "red" },
    { text: "Digital", color: "orange" },
    { text: "Agile management", color: "blue" },
    { text: "Technology", color: "orange" },
  ];
  return (
    <div className={styles.home}>
      <Header />
      <TopMain />
      <div className={styles.relet}>
        <div className={styles.imgBox}>
          <img alt="imgLog" src={imgLog} />
        </div>
        <p className={styles.text}>and, leveraging our community of experts</p>
        <p className={styles.text2}>we lead them to the next level ...</p>
      </div>
      <div className={styles.underdev}>
        <p className={styles.forThisP}>Curious to know more?</p>
        <AlertDialog widthP="285px" heightP="60px" fontP="24px" />
      </div>
      <Dark text="Our community includex experts in many fields" />
      <div className={styles.forSlide}>
        <Slider info={info} />
      </div>
      <Dark text="Ready to sell your company?" />
      <BlueParth />
      <Dark text="Your company will be in safe hands..." />
      <IntPart />
      <Dark text="To sell your company it takes only 6 steps " />
      <UnderMenu />
      <Dark text="Contact us" />
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
        <p>Privacy Policy & Terms of Use</p>
      </footer>
    </div>
  );
};

export default HomePage;
