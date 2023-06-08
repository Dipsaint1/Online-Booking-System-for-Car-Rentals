import React from 'react';
import { CarouselObject } from '../components/CarouselData'

const Carousel = ({name, make, img, price}: CarouselObject) => {
  return (
    <div className="item">
    <div className="car-wrap rounded ftco-animate">
      {/* <img src={img} alt="" /> */}
      <div className="img rounded d-flex align-items-end" style={{ backgroundImage: `url(${img})` }}>
      </div>
      <div className="text">
        <h2 className="mb-0"><a href="#">{name}</a></h2>
        <div className="d-flex mb-3">
          <span className="cat">{make}</span>
          <p className="price ml-auto">${price} <span>/day</span></p>
        </div>
        <p className="d-flex mb-0 d-block"><a href="#" className="btn btn-primary py-2 mr-1">Book now</a> <a href="#" className="btn btn-secondary py-2 ml-1">Details</a></p>
      </div>
    </div>
  </div>
  )
}

export default Carousel;