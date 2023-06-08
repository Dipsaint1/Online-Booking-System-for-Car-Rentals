import { CarouselObject } from '../components/CarouselData';


const Carousel = ({name, make, img, price}: CarouselObject) => {

  return (
    <div className="item">
      <div className="car-wrap rounded">
        <img className="img rounded" src={img} alt="carousel-img" />
        <div className="text">
          <h2 className="mb-0"><a href="#">{name}</a></h2>
          <div className="d-flex mb-3">
            <span className="make">{make}</span>
            <p className="price ms-auto">${price} <span>/day</span></p>
          </div>
          <p role='button' className="d-flex mb-0 d-block">
            <a href="#" className="btn btn-primary py-2 me-1">Book now</a> 
            <a href="#" className="btn btn-secondary py-2 ms-1">Details</a>
          </p>
        </div>
      </div>  
    </div>
  )
}

export default Carousel;