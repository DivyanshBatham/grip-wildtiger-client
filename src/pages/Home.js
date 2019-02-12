import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Block from "../components/Block";
import Timings from "../components/Timings";

const Home = props => {
  console.log("Home.js", props);
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
            <div className="col-7">
              <div className="block-head">
                <h4 className="block__heading">Discover</h4>
                <h3 className="block__subheading">Our Story</h3>
              </div>
              <div className="block-body-columns">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ex est, scelerisque ut enim in, faucibus venenatis
                  neque. Vivamus finibus dapibus nisi, vitae condimentum lacus.
                  Suspendisse et turpis nibh. Fusce sed venenatis neque. Cras
                  vitae porta diam. Cras nec dictum orci. Quisque at malesuada
                  nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ex est, scelerisque ut enim in, faucibus venenatis
                  neque. Vivamus finibus dapibus nisi, vitae condimentum lacus.
                  Suspendisse et turpis nibh. Fusce sed venenatis neque. Cras
                  vitae porta diam. Cras nec dictum orci. Quisque at malesuada
                  nisl.
                  <br />
                  <Link to="/" className="block-link">
                    Read More
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-5">
              <div className="widescreen-ratio outside" />
            </div>
          </div>
        </div>
      </section>
      <section className="dark-section">
        <div className="container">
          <div className="box" />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-6 vAlign">
              <Block
                heading="Discover"
                subheading="Our Menu"
                text="For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates.  We love food, lots of different food, just like you."
                href="/"
                href_text="View Full Menu"
              />
            </div>
            <div className="col-6 vAlign">
              <div className="widescreen-ratio">
                {/* <div>A</div>
                <div>B</div>
                <div>C</div>
                <div>D</div> */}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">Menu Images</div>
            <div className="col-6">
              <Block
                heading="Chill in"
                subheading="The Bar"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex est, scelerisque ut enim in, faucibus venenatis neque. Vivamus finibus dapibus nisi, vitae condimentum lacus."
                href="/"
                href_text="View Bar"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="dark-section">
        <div className="container">
          <div className="box" />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-6 vAlign">
              <Block
                heading="Make in"
                subheading="Reservation"
                text="We take reservations for lunch and dinner. To make a reservation, please call us at (027) 8338 145 between 10am-6pm, Monday to Friday."
                href="/"
                href_text="Book your table"
              />
            </div>
            <div className="col-6 vAlign">
              <div className="widescreen-ratio" />
            </div>
          </div>
          <div className="row">
            <div className="col-6 vAlign">
              <div className="widescreen-ratio" />
            </div>
            <div className="col-6 vAlign">
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
          <div className="row">
            <div className="col-6 vAlign">
              <Block
                heading="Subscribe"
                subheading="Newsletter"
                text="Be the first one to know about our newest menu items & latest offers.
                More Food. Less Money. Commence Mouthwatering."
                href="/"
                href_text="Subscribe"
              />
            </div>
            <div className="col-6 vAlign">
              {/* <div className="widescreen-ratio" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
