import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselData from './CarouselData';
import Carousel from './Carousel';
import '../sass/carousel.scss'
import { useEffect, useState } from "react";

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
  draggable: boolean
}

const ReactSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState<number>(3);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 540 ) setSlidesToShow(1);
      else if (window.innerWidth > 540 && window.innerWidth < 993) setSlidesToShow(2);
      else setSlidesToShow(3);
    }
    window.addEventListener('resize', handleWindowResize);
    return () => { window.removeEventListener("resize", handleWindowResize)}
  }, []);

  const settings: SliderSettingsType = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    accessibility: true,
    draggable: true
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