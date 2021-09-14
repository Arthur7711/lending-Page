import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = ({ info }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel
        pauseOnHover={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1500}
        responsive={responsive}
        arrows={false}
      >
        {info.map((el, i) => (
          <div
            key={i}
            style={{
              color: el.color,
              height: "47px",
              fontFamily: "Chakra Petch",
              fontWeight: "600",
              fontSize: "36px",
              lineHeight: "47px",
            }}
          >
            {el.text}
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Slider;
