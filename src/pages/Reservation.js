import React, { Component } from "react";
import Hero from "../components/Hero";
import Block from "../components/Block";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Booking from "../components/Booking";

// TODO: Complete reservation part

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Hero
          sub="Browse our Tables"
          main="Reservation"
          cta="Book Now"
          bg_class="reservation-bg"
        />
        <section>
        This section is incomplete.
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Block
                  heading="Book The"
                  subheading="Cushioned Dining"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex est, scelerisque ut enim in, faucibus venenatis neque. Vivamus finibus dapibus nisi, vitae condimentum lacus. Suspendisse et turpis nibh. Fusce sed venenatis neque. Cras vitae porta diam. Cras nec dictum orci. Quisque at malesuada nisl. "
                  href="/"
                  href_text="Book Now"
                />
              </div>
              <div className="col-6">
                {/* This section is incomplete. */}
              </div>
            </div>
          </div>
          This section is incomplete.
        </section>

        <section className="dark-section" id="ctaTarget">
          <div className="container">
            <Booking />
          </div>
        </section>
        <section>
          <div className="container">
            <Subscribe />
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default Reservation;
