import React from "react";
import ImageComp from "../imageComp/ImageComp";
import TextPart from "../textPart/TextPart";
import RightPart from "../rightPart/RightPart";
import styles from "./IntPart.module.css";
import img1 from "../../imgs/Rectangle 673.png";
import img2 from "../../imgs/Rectangle 674.png";
import img3 from "../../imgs/Rectangle 675.png";
import img4 from "../../imgs/Rectangle 676.png";

const IntPart = () => {
  return (
    <div className={styles.int}>
      <TextPart
        title="Product"
        text="We will infuse Artificial Intelligence in your products and will bring the technology expertise to make it stand against competition"
      />
      <ImageComp img={img1} />
      <ImageComp img={img2} />
      <RightPart
        title="Marketing"
        text=" We will enhance your customer experience and bring visibility to your products thanks to a strong digital marketing expertise"
      />
      <TextPart
        title="People"
        text="We will boost your human capital productivity thanks to our world-class agile management strategy and make your company attractive for global talents"
      />
      <ImageComp img={img3} />
      <ImageComp img={img4} />
      <RightPart
        title="Taxes"
        text="Our Tax consultant will make sure your money strategy is optimized and can generate value to the company"
      />
    </div>
  );
};

export default IntPart;
