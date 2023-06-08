import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselData from './CarouselData';
import Carousel from './Carousel';

interface SliderSettings{
  dots: boolean,
  infinite: boolean,
  slidesToShow: number,
  slidesToScroll: number,
  autoplay: boolean,
  speed: number,
  autoplaySpeed: number,
  cssEase: string
}

const ReactSlider = () => {
  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  return (
    <Slider {...settings}>
      {CarouselData.map((item, index) => {
        return(
          <Carousel key={index} {...item} />
        )
      })}
    </Slider>
  )
}

export default ReactSlider;