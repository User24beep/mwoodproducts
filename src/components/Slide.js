import Carousel from "react-bootstrap/Carousel";
import slide0 from "../images/slideimage0.png";
import slide1 from "../images/slideimage1.jpeg";
import slide2 from "../images/slideimage2.jpeg";
import slide3 from "../images/slideimage3.jpeg";
import slide4 from "../images/slideimage4.jpeg";
import slide5 from "../images/slideimage5.jpeg";

function Slide() {
  return (
    <Carousel
      style={{
        width: "100%",
        height: "40%",
        overflow: "hidden",
        borderRadius: "10px",
      }}
    >
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={slide0}
          alt="Die Säge bei der Arbeit"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={slide1}
          alt="Holztransport aus dem Frankenwald"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={slide2} alt="Bretter und Balken" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Bretter des Sägewerks"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={slide4}
          alt="Edelholz geschnitten in Bretter"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={slide5} alt="Hobelarbeite" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;
