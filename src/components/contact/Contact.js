import LogoPart from "../logoPart/LogoPart";
import styles from "./Contact.module.css";
import mail from "../../imgs/Message.png";
import img from "../../imgs/shuttle.png";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhote] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState({
    nameValue: "",
    emailValue: "",
    phoneValue: "",
    messageValue: "",
  });

  function checkName(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }

  function checkEmail(e) {
    console.log(e.target.value);
    setEmail(e.target.value);
  }

  function checkPhone(e) {
    console.log(e.target.value);
    setPhote(e.target.value);
  }

  function checkMessage(e) {
    console.log(e.target.value);
    setMessage(e.target.value);
  }

  function checking() {}
  return (
    <div className={styles.contact}>
      <div className={styles.left}>
        <LogoPart />
        <p className={styles.text}>
          Fill up the form and our team will get back to you within 24 hours
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
            <input
              value={name}
              onChange={checkName}
              type="text"
              placeholder="Name"
            />
          </div>
          <div className={styles.forinps}>
            <p>Email</p>
            <input
              value={email}
              onChange={checkEmail}
              type="text"
              placeholder="name@email.com"
            />
          </div>
          <div className={styles.forinps}>
            <p>Phone</p>
            <input
              value={phone}
              onChange={checkPhone}
              type="text"
              placeholder="+123 568 6354"
            />
          </div>
        </div>
        <div className={styles.forMessage}>
          <p>Message</p>
          <input value={message} onChange={checkMessage} type="text" />
        </div>
        <div></div>
        <div className={styles.compBtn}>
          <div className={styles.button}>
            <p>Send message</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
