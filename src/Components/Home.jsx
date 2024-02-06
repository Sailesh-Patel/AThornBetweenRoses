import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
import RS from "./Pictures/RS.png";
import RS2 from "./Pictures/RS2.png";
import RS3 from "./Pictures/RS3.png";
import RS4 from "./Pictures/RS4.png";
 
function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
  };
 
  return (
    <Slider {...settings}>
      <div className="carousel-item active">
        <img src={RS} alt="RS" />
      </div>
      <div className="carousel-item">
        <img src={RS2} alt="RS2" />
      </div>
      <div className="carousel-item">
        <img src={RS3} alt="RS3" />
      </div>
      <div className="carousel-item">
        <img src={RS4} alt="RS4" />
      </div>
    </Slider>
  );
}
 
export default Home;