import '../sass/featured.scss';
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