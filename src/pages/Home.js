import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Block from "../components/Block";
import Timings from "../components/Timings";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    // const homebg = new Image();
    // homebg.src = "../assets/menu-bg-min.jpg";
    // homebg.onload = function() {
    //   document.querySelector("header").style["background-image"] = `url("${
    //     homebg.src
    //   }")`;
    // };
  }

  render() {
    return (
      <>
        <Hero
          sub="We serve Fresh & Delicious"
          main="Laotian & Thai Cuisines"
          cta="Hungry? Reserve your spot."
          bg_class="home"
          href="/reservation"
        />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-7 vAlign">
                <div className="block-head">
                  <h4 className="block__heading">Discover</h4>
                  <h3 className="block__subheading">Our Story</h3>
                </div>
                <div className="block-body-columns">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ex est, scelerisque ut enim in, faucibus venenatis
                    neque. Vivamus finibus dapibus nisi, vitae condimentum
                    lacus. Suspendisse et turpis nibh. Fusce sed venenatis
                    neque. Cras vitae porta diam. Cras nec dictum orci. Quisque
                    at malesuada nisl. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Integer exest, scelerisque ut enim in,
                    faucibus venenatis neque. <br />
                    <br />
                    Vivamus finibus dapibus nisi, vitae condimentum lacus.
                    Suspendisse et turpis nibh. Fusce sed venenatis neque. Cras
                    vitae porta diam. Cras nec dictum orci. Quisque at malesuada
                    nisl.
                    <br />
                    {/* <Link to="/" className="block-link except-mobile">
                      Read More
                    </Link> */}
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 vAlign">
                <div className="widescreen-ratio outside" />
                {/* <Link to="/" className="block-link mobile-only">
                  Read More
                </Link> */}
              </div>
            </div>
          </div>
        </section>

        <section className="dark-section">
          <div className="container">
            <Services />
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-7 vAlign">
                <Block
                  heading="Discover"
                  subheading="Our Menu"
                  text="For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates.  We love food, lots of different food, just like you."
                  href="/menu"
                  href_text="View Full Menu"
                />
              </div>
              <div className="col-xs-12 col-sm-5 vAlign">
                <div className="widescreen-ratio">
                  <div className="menu-grid">
                    <div />
                    <div />
                    <div />
                    <div />
                  </div>
                </div>
                {/* TODO: Fix Underling when clicking on links except navbar */}
                <Link to="/menu" className="block-link mobile-only">
                  View Full Menu
                </Link>
              </div>
            </div>

            <div className="row mt-5rem flex-colrev">
              <div className="col-xs-12 col-sm-5 vAlign">
                <div className="widescreen-ratio bar" />
                <Link to="/bar" className="block-link mobile-only">
                  View Bar
                </Link>
              </div>
              <div className="col-xs-12 col-sm-7 vAlign">
                <Block
                  heading="Relax At"
                  // heading="Chill at"
                  subheading="The Bar"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex est, scelerisque ut enim in, faucibus venenatis neque. Vivamus finibus dapibus nisi, vitae condimentum lacus."
                  href="/bar"
                  href_text="View Bar"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="dark-section testimonials">
          {/* <div className="container flex-center"> */}
          <Testimonials />
          {/* </div> */}
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-7 vAlign">
                <Block
                  heading="Make"
                  subheading="Reservation"
                  text="We take reservations for lunch and dinner. To make a reservation, please call us at (027) 8338 145 between 10am-6pm, Monday to Friday."
                  href="/reservation"
                  href_text="Book your table"
                />
              </div>
              <div className="col-xs-12 col-sm-5 vAlign">
                <div className="widescreen-ratio reservation" />
                <Link to="/reservation" className="block-link mobile-only">
                  Book your table
                </Link>
              </div>
            </div>

            <div className="row mt-5rem flex-colrev">
              <div className="col-xs-12 col-sm-5 vAlign">
                <div className="widescreen-ratio takeout" />
                {/* TODO: Make it open the calling app */}
                {/* https://www.tripadvisor.in/Restaurant_Review-g319726-d1191155-Reviews-Under_the_Mango_Tree-Bhopal_Bhopal_District_Madhya_Pradesh.html */}
                {/* onclick="widgetEvCall('handlers.onPhoneClicked', event, this); window.open('tel:+919993091077', '_self');" */}
                <a
                  href="tel:+1-360-882-8887"
                  className="block-link mobile-only"
                >
                  CALL +1 360 882 8887
                </a>
                {/* <a href="tel:+1-303-499-7111">+1 (303) 499-7111</a> */}
              </div>
              <div className="col-xs-12 col-sm-7 vAlign">
                <Block
                  heading="Take Out"
                  subheading="Food"
                  text="We take reservations for lunch and dinner. To make a reservation, please call us at (027) 8338 145 between 10am-6pm, Monday to Friday."
                  href="tel:+1-360-882-8887"
                  href_text="CALL +1 360 882 8887"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="map-section">
          <div className="container">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d44658.92452599251!2d-122.5373373456343!3d45.606970696074455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x0%3A0xa3e862fb601c0350!2sWild+Tiger!3m2!1d45.606916!2d-122.50231799999999!5e0!3m2!1sen!2sin!4v1552029815308"
              // width="600"
              // height="450"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen
            /> */}

            {/* <div className="row"> */}
            {/* <div className="col-4"> */}
            <Timings />
            {/* </div> */}
            {/* </div> */}
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

export default Home;
