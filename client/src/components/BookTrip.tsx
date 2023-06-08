import React from 'react';
import '../sass/booktrip.scss';

const BookTrip = () => {
  return (
    <section id='booktrip'>
      <div className="container">
        <div className="row align-items-center gap-0">
          <div className='col-md-4'>
            <form action="#" className="request-form bg-primary">
              <h2>Make your trip</h2>
              <div className="form-group">
                <label htmlFor="pick_up_location" className="label">Pick-up location</label>
                <input type="text" className="form-control" id='pick_up_location' placeholder="City, Airport, Station, etc"/>
              </div>
              <div className="form-group">
                <label htmlFor="drop_off_location" className="label">Drop-off location</label>
                <input type="text" className="form-control" id='drop_off_location' placeholder="City, Airport, Station, etc"/>
              </div>
              <div className="form-group">
                <label htmlFor="time_pick" className="label">Pick-up time</label>
                <input type='datetime-local' className="form-control" id="time_pick" placeholder="Time"/>
              </div>
              <div className="form-group mt-4">
                <input type="submit" value="Rent A Car Now" className="btn py-3 px-4"/>
              </div>
            </form>
          </div>
          <div className="col-md-8 d-flex align-items-center booktrip-right">
            <div className="services-wrap rounded-right w-100">
              <h3 className="heading-section mb-4">Better Way to Rent Your Perfect Cars</h3>
              <div className="row d-flex mb-4">
                <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                  <div className="services w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center"><i className="fa-solid fa-map-location-dot"></i></div>
                    <div className="text w-100">
                      <h3 className="heading mb-2">Choose Your Pickup Location</h3>
                    </div>
                  </div>      
                </div>
                <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                  <div className="services w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center"><i className="fa-regular fa-handshake"></i></div>
                    <div className="text w-100">
                      <h3 className="heading mb-2">Select the Best Deal</h3>
                    </div>
                  </div>      
                </div>
                <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                  <div className="services w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center"><i className="fa-solid fa-car-side"></i></div>
                    <div className="text w-100">
                      <h3 className="heading mb-2">Reserve Your Rental Car</h3>
                    </div>
                  </div>      
                </div>
              </div>
              <p><a href="#" className="btn btn-primary py-3 px-4">Reserve Your Perfect Car</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookTrip;