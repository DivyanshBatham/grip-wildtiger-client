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
          sub="We Serve Fresh & Delicious"
          main="Laotian & Thai Cuisines"
          cta="Hungry? Reserve your spot."
          bg_class="home"
        />
        {/* <header>
            <div className="hero shadow">
                <h3 className="hero__sub">We Serve Fresh & Delicious</h3>
                <h2 className="hero__main">Laotian & Thai Cuisines</h2>
                <button className="cta">Hungry? Reserve your spot.</button>
            </div>
        </header> */}
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
                    <Link to="/" className="block-link except-mobile">
                      Read More
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 vAlign">
                <div className="widescreen-ratio outside" />
                <Link to="/" className="block-link mobile-only">
                  Read More
                </Link>
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
                <Link to="/" className="block-link mobile-only">
                  View Full Menu
                </Link>
              </div>
            </div>

            <div className="row mt-5rem flex-colrev">
              <div className="col-xs-12 col-sm-5 vAlign">
                <div className="widescreen-ratio bar" />
                <Link to="/" className="block-link mobile-only">
                  View Bar
                </Link>
              </div>
              <div className="col-xs-12 col-sm-7 vAlign">
                <Block
                  heading="Relax At"
                  // heading="Chill at"
                  subheading="The Bar"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex est, scelerisque ut enim in, faucibus venenatis neque. Vivamus finibus dapibus nisi, vitae condimentum lacus."
                  href="/"
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
                  href="/"
                  href_text="Book your table"
                />
              </div>
              <div className="col-xs-12 col-sm-5 vAlign">
                <div className="widescreen-ratio reservation" />
                <Link to="/" className="block-link mobile-only">
                  Book your table
                </Link>
              </div>
            </div>

            <div className="row mt-5rem flex-colrev">
              <div className="col-xs-12 col-sm-5 vAlign">
                <div className="widescreen-ratio takeout" />
                <Link to="/" className="block-link mobile-only">
                  CALL +1 360 882 8887
                </Link>
              </div>
              <div className="col-xs-12 col-sm-7 vAlign">
                <Block
                  heading="Take Out"
                  subheading="Food"
                  text="We take reservations for lunch and dinner. To make a reservation, please call us at (027) 8338 145 between 10am-6pm, Monday to Friday."
                  href="/"
                  href_text="CALL +1 360 882 8887"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="map-section">
          <div className="container">
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

        <Footer/>
      </>
    );
  }
}

export default Home;
