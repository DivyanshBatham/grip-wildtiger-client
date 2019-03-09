import React, { Component } from "react";
import Hero from "../components/Hero";
import Block from "../components/Block";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Booking from "../components/Booking";
import { animateScroll as scroll } from "react-scroll";

// TODO: Complete reservation part

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ctaTarget = React.createRef();
  }
  componentDidMount() {
    this.props.findAndSetUnderline();
    window.scrollTo(0, 0);
    if (this.props.routerProps.location.pathname === "/reservation/book")
      scroll.scrollTo(this.ctaTarget.current.offsetTop, {
        smooth: true,
        duration: 500,
        delay: 500
      });
  }

  render() {
    return (
      <>
        <Hero
          sub="Book your table in Advance"
          main="Reservation"
          cta="Book your table now!"
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
              <div className="col-6">{/* This section is incomplete. */}</div>
            </div>
          </div>
          This section is incomplete.
        </section>

        <section className="dark-section" id="ctaTarget" ref={this.ctaTarget}>
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
