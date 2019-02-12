import React from "react";
import Hero from "../components/Hero";

const Menu = props => {
  console.log("Menu.js", props);
  return (
    <>
      <Hero
        sub="Browse our Delights"
        main="Menu"
        cta="Happy Hour menu"
        bg_class="menu"
      />
      <section className="container">
        <div className="row">
          <div className="col-6">Text</div>
          <div className="col-6">Image</div>
        </div>
      </section>
    </>
  );
};

export default Menu;
