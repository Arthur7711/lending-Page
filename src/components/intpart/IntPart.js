import React from "react";
import ImageComp from "../imageComp/ImageComp";
import TextPart from "../textPart/TextPart";
import RightPart from "../rightPart/RightPart";
import styles from "./IntPart.module.css";
import img1 from "../../imgs/Rectangle 673.png";
import img2 from "../../imgs/Rectangle 674.png";
import img3 from "../../imgs/Rectangle 675.png";
import img4 from "../../imgs/Rectangle 676.png";
import { useTranslation } from "react-i18next";

const IntPart = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.int}>
      <TextPart title="Product" text={t("ProductText")} />
      <ImageComp img={img1} />
      <ImageComp img={img2} />
      <RightPart title="Marketing" text={t("MarketingText")} />
      <TextPart title="People" text={t("PeopleText")} />
      <ImageComp img={img3} />
      <ImageComp img={img4} />
      <RightPart title="Taxes" text={t("TaxesText")} />
    </div>
  );
};

export default IntPart;
