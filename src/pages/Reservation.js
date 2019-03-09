import React, { Component } from "react";
import Hero from "../components/Hero";
import Block from "../components/Block";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import Booking from "../components/Booking";
import { animateScroll as scroll } from "react-scroll";
// import {Link} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { throws } from "assert";

// TODO: Complete reservation part

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // guests: { value: "20+", label: "More than 20, Party?" }
    };
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

  componentWillUnmount() {
    this.setState({});
  }

  setPartyOption = () => {
    // alert("SetPartyOptions()");
    this.setState({
      guests: { value: "20+", label: "More than 20, Party?" }
    });
  };

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
          {/* This section is incomplete. */}
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-7 vAlign">
                <Block
                  heading="Make"
                  subheading="Reservation"
                  text="We take reservations for lunch and dinner. To make a reservation, please call us at (027) 8338 145 between 10am-6pm, Monday to Friday."
                  href_text="Book your table"
                />
              </div>
              <div className="col-xs-12 col-sm-5 vAlign">
                <div className="widescreen-ratio reservation" />
                <ScrollLink
                  className="block-link mobile-only"
                  to="ctaTarget"
                  smooth={true}
                  duration={1000}
                >
                  Book your table
                </ScrollLink>
              </div>
            </div>
            <div className="row mt-5rem flex-colrev">
              <div className="col-xs-12 col-sm-5 vAlign">
                <div className="widescreen-ratio special" />
                <ScrollLink
                  className="block-link mobile-only"
                  to="ctaTarget"
                  smooth={true}
                  duration={1000}
                  onClick={this.setPartyOption}
                >
                  Book for Party
                </ScrollLink>
              </div>
              <div className="col-xs-12 col-sm-7 vAlign">
                <Block
                  heading="Book For"
                  subheading="Special Occations"
                  text="Plan your party with us and make your special occasion even more memorable. We will decorate the restaurant as per your needs."
                  href_text="Book for Party"
                  onClickHandler={this.setPartyOption}
                />
              </div>
            </div>
            {/* <Block
                  heading="Book The"
                  subheading="Cushioned Dining"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex est, scelerisque ut enim in, faucibus venenatis neque. Vivamus finibus dapibus nisi, vitae condimentum lacus. Suspendisse et turpis nibh. Fusce sed venenatis neque. Cras vitae porta diam. Cras nec dictum orci. Quisque at malesuada nisl. "
                  href="/"
                  href_text="Book Now"
                /> */}
          </div>
          {/* This section is incomplete. */}
        </section>

        <section className="dark-section" id="ctaTarget" ref={this.ctaTarget}>
          <div className="container">
            <Booking guests={this.state.guests} />
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
