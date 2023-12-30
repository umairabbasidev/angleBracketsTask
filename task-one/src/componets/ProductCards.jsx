import React from "react";

import Cards from "../componets/Cards";
import iconOne from "../assets/icon-one.svg";
import iconTwo from "../assets/icon-two.svg";
import iconThree from "../assets/icon-three.svg";
import iconFour from "../assets/icon-four.svg";
import iconFive from "../assets/icon-five.svg";
import iconSix from "../assets/icon-six.svg";
import iconSeven from "../assets/icon-seven.svg";
import rightArrow from "../assets/arrow_right.svg";
import leftArrow from "../assets/arrow_left.svg";

import imageOne from "../assets/img-one.svg";
import imageTwo from "../assets/img-two.svg";
import imageThree from "../assets/img-three.svg";
import imageFour from "../assets/img-four.svg";
import Slider from "react-slick";

function ProductCards() {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="absolute left-2/4 mt-10">
        <img src={leftArrow} alt="" />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="absolute right-2/4 -bottom-20 z-10 ">
        <img src={rightArrow} alt="" />
      </button>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* <div className="flex justify-evenly items-center flex-wrap pt-7 "> */}

      <Slider {...settings}>
        <div>
          <Cards
            name="Athena G"
            role="Product Designer"
            img={imageOne}
            iconOne={iconOne}
            iconTwo={iconTwo}
            iconThree={iconThree}
          />
        </div>

        <div>
          <Cards
            name="Thomas Ed"
            role="Front-End Developer"
            img={imageTwo}
            iconFour={iconFour}
            iconFive={iconFive}
            
          />
        </div>

        <div>
          <Cards
            name="Jesse Showalter"
            role="Back-End Designer"
            img={imageThree}
            iconFour={iconFour}
            iconFive={iconFive}
            iconSix={iconSix}
          />
        </div>

        <div>
          <Cards
            name="Christin"
            role="Dev Ops Engineer"
            img={imageFour}
            iconSeven={iconSeven}
            iconFour={iconFour}
          />
        </div>
      </Slider>
      {/* </div> */}
    </>
  );
}

export default ProductCards;
