import LogoPart from "../logoPart/LogoPart";
import styles from "./Contact.module.css";
import mail from "../../imgs/Message.png";
import img from "../../imgs/shuttle.png";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.left}>
        <LogoPart />
        <p className={styles.text}>
          Fill up the form and our team will get back to you within 24 hours{" "}
        </p>
        <div className={styles.mailPart}>
          <div className={styles.mail}>
            <img alt="mail" src={mail} />
          </div>
          <p>acquire@equire.company</p>
        </div>
        <div className={styles.imgBox}>
          <img alt="img" src={img} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.lChild}>
          <div className={styles.forinps}>
            <p>Name</p>
            <input type="text" placeholder="Name" />
          </div>
          <div className={styles.forinps}>
            <p>Email</p>
            <input type="text" placeholder="name@email.com" />
          </div>
          <div className={styles.forinps}>
            <p>Phone</p>
            <input type="text" placeholder="+123 568 6354" />
          </div>
        </div>
        <div className={styles.forMessage}>
            <p>Message</p>
            <input type='text' />
        </div>
      </div>
    </div>
  );
};

export default Contact;
