import '../sass/featured.scss';
import img1 from '../assets/car-1.jpg';
import img2 from '../assets/car-2.jpg';
import img3 from '../assets/car-3.jpg';
import img4 from '../assets/car-4.jpg';
import img5 from '../assets/car-5.jpg';
import img6 from '../assets/car-6.jpg';
import img7 from '../assets/car-7.jpg';
import img8 from '../assets/car-8.jpg';
import img9 from '../assets/car-9.jpg';
import img10 from '../assets/car-10.jpg';
import ReactSlider from './ReactSlider';


const FeaturedVehicles = () => {
  return (
    <section id="featured">
      <div className="container featured-container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center mb-5">
            <span className="subheading">What we offer</span>
            <h2 className="mb-2">Featured Vehicles</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="carousel">
              <ReactSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedVehicles;