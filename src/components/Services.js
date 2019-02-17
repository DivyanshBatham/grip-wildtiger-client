import React from "react";
import dinein from "./../assets/services-dinein.svg";
import takeout from "./../assets/services-takeout.svg";
import reservations from "./../assets/services-reserved.svg";
import bar from "./../assets/services-bar.svg";


const Services = () => {
  return (
    <>
      <div className="services">
        <h5 className="services__heading">Services We Offer</h5>
        <div className="services__icons">
          <div className="service-wrapper">
            <div className="service-icon">
                <img src={dinein} alt="Dine-In"/>
            </div>
            <span>Dine-In</span>
          </div>
          <div className="service-wrapper">
            <div className="service-icon">
                <img src={takeout} alt="Take-Out"/>
            </div>
            <span>Take-Out</span>
          </div>
          <div className="service-wrapper">
            <div className="service-icon">
                <img src={reservations} alt="Reservations"/>
            </div>
            <span>Reservations</span>
          </div>
          <div className="service-wrapper">
            <div className="service-icon">
                <img src={bar} alt="Bar"/>
            </div>
            <span>Bar</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
