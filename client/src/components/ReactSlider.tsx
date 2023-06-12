import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselData from './CarouselData';
import Carousel from './Carousel';
import '../sass/carousel.scss'
import { useEffect, useState } from "react";

type ResponsiveSettingsType = {
  breakpoint: number,
  settings: SettingsObjectType
}

type SettingsObjectType = {
  infinite?: boolean,
  slidesToShow: number,
  slidesToScroll: number,
  autoplay?: boolean,
  initialSlide?: number, 
  dots?: boolean
}


type SliderSettingsType = {
  dots: boolean,
  infinite: boolean,
  slidesToShow: number,
  slidesToScroll: number,
  autoplay: boolean,
  speed: number,
  autoplaySpeed: number,
  cssEase: string,
  accessibility: boolean,
  draggable: boolean,
  // responsive: <T>[]
}

type SettingsType = {
  dots: boolean, 
  autoplay: boolean,
  autoplaySpeed: number,
  arrows: boolean,
  infinite: boolean,
  speed: number,
  slidesToShow: number,
  slidesToScroll: number,
  initialSlide: number,
  responsive: ResponsiveSettingsType[]
} 

const ReactSlider = () => {
  
  const settings: SettingsType = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: true,
    dots: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  }

  return (
    <Slider {...settings}>
      {CarouselData.map((item, index) => {
        return( <Carousel key={index} {...item} /> )
      })}
    </Slider>
  )
}

export default ReactSlider;