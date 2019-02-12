import React from "react";
import Hero from "../components/Hero";
import Block from "../components/Block";

const Reservation = () => {
  return (
    <>
      <Hero
        sub="Browse our Tables"
        main="Reservation"
        cta="Book Now"
        bg_class="reservation"
      />
      <section className="container">
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
        </div>
      </section>
    </>
  );
};

export default Reservation;
