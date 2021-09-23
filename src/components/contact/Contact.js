import LogoPart from "../logoPart/LogoPart";
import styles from "./Contact.module.css";
import mail from "../../imgs/Message.png";
import img from "../../imgs/shuttle.png";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import API from "../../API";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState({
    nameValue: name,
    emailValue: email,
    phoneValue: phone,
    messageValue: message,
  });

  const { t } = useTranslation();

  function checkName(e) {
    setName(e.target.value);
  }

  function checkEmail(e) {
    setEmail(e.target.value);
  }

  function checkPhone(e) {
    setPhone(e.target.value);
  }

  function checkMessage(e) {
    setMessage(e.target.value);
  }

  useEffect(() => {
    setIsValid({
      nameValue: name,
      emailValue: email,
      phoneValue: phone,
      messageValue: message,
    });
  }, [name, email, phone, message]);

  function checking() {
    if (name.length < 1 || name.length >= 255) {
      alert("forgot name");
      return;
    }
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      alert("wrong email");
      return;
    }
    if (phone.length < 1) {
      alert("wrong phone number");
      return;
    }
    if (message.length < 1) {
      alert("forgot message");
      return;
    }

    const data = {
      name: isValid.nameValue,
      email: isValid.emailValue,
      phone: isValid.phoneValue,
      message: isValid.messageValue,
    };
    fetch('https://equire.company/api/api/createContact', {
      crossDomain:true,
      mode:'cors',
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
    })
      .then(response => response.json())
    // API.post("createCall", data).then((r) => {
    //   console.log(r.data);
    // });
    // console.log(JSON.stringify(isValid));
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    return true;
  }

  return (
    <div className={styles.contact}>
      <div className={styles.left}>
        <LogoPart />
        <p className={styles.text}>{t("contactP")}</p>
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
              placeholder="123 568 6354"
            />
          </div>
        </div>
        <div className={styles.forMessage}>
          <p>Message</p>
          <input value={message} onChange={checkMessage} type="text" />
        </div>
        <div></div>
        <div className={styles.compBtn}>
          <div onClick={checking} className={styles.button}>
            <p>{t("contactBtn")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
