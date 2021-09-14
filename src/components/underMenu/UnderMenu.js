import { useState } from "react";
import styles from "./UnderMenu.module.css";

const UnderMenu = () => {
  const hrefs = [
    {
      id: 0,
      title: "1.Let’s get to know each other",
    },
    {
      id: 1,
      title: "2.Non-disclosure agreement",
    },
    {
      id: 2,
      title: "3.Data analysis",
    },
    {
      id: 3,
      title: "4.We make an offer",
    },
    { id: 4, title: "5.Smart transformation & Due diligence" },
    { id: 5, title: "6.Closing: you are satisfied or reimbursed" },
  ];

  const inform = [
    "During this first meeting we’d like to understand some high-level points around yearly revenues/profit and help you understand quickly if we are the best partner for you. ",
    " At the of the meeting, if both parties are ok to proceed , we’d like to look at your numbers in more detail . So, before we do that, we sign an NDA ensuring that any information will not be shared with third parties.",
    "You provide some basic information and, if your business fits our model, we will evaluate your company financial data and review your products.",
    "Based on the information you have provided and our analyses we are able to present you with a Letter of Intent (LOI), which lays down our offer to you including: /n a valueation, including a cumulative bonus up to 20% of the purchase price; /n payment terms; /n additional due diligence requests ",
    "Once we agree to terms, our team works tirelessly to finalize the fine print and createan integration and smart transformationplan. For several weeks we deploy ourArtificial Intelligence leaders, Businessanalysts, Digital experts, Growth Hackers,Blockchain developers, Agile managers …to kick start the smart transformation inyour company and bring your business tothe top level. Your products can beaugmented by Artificial Intelligence, yourworkforce can be empowered through agilemanagement and through the adoption ofbest-in-class digital tools to increaseproductivity and efficiency, and much muchmore. And, don’t worry, we pay for theentire strategic endeavor. This step can takefrom 4 to 24 weeks. At the end of this stepour business analysts will have also finalizedthe company due-diligence.",
    "Get paid in cash for the business you have built ! And if,for any reason, the deal will not be made, don’t worry:you don’t have to pay for the smart transformation wehave delivered to your company, you will keep acompany that is now worth much more.",
  ];
  const [info, setInfo] = useState(inform[0]);
  const [ind, setInd] = useState("01");

  function changeInfo(id) {
    setInfo(inform[id]);
    setInd(`0 ${id + 1}`);
  }
  return (
    <div className={styles.infoPart}>
      <div className={styles.links}>
        {hrefs.map((el) => (
          <p onClick={() => changeInfo(el.id)} key={el.id}>
            {el.title}
          </p>
        ))}
      </div>
      <div className={styles.textPart}>
        <p>{ind}</p>
        <div className={styles.likeP}>{info}</div>
      </div>
    </div>
  );
};

export default UnderMenu;
