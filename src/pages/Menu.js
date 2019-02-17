import React from "react";
import Hero from "../components/Hero";
import Block from "../components/Block";

const Menu = props => {
  // console.log("Menu.js", props);
  return (
    <>
      <Hero
        sub="Browse our Delights"
        main="Menu"
        cta="Happy Hour menu"
        bg_class="menu"
      />

      <section>
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1">
              <Block
                heading="Discover"
                subheading="Our Menu"
                text="For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates.  We love food, lots of different food, just like you."
              />
            </div>
          </div>
        </div>

        <nav className="foodmenu__nav">
          <div className="container">
            <ul>
              <li>
                <a href="#Appetizers" className="active">
                  Appetizers
                </a>
              </li>
              <li>
                <a href="#Soup">Soup</a>
              </li>
              <li>
                <a href="#Salad">Salad</a>
              </li>
              <li>
                <a href="#Stir-Fried">Stir-Fried</a>
              </li>
              <li>
                <a href="#Curries">Curries</a>
              </li>
              <li>
                <a href="#Noodles">Noodles</a>
              </li>
              <li>
                <a href="#Noodles Soup">Noodles Soup</a>
              </li>
              <li>
                <a href="#House Specials">House Specials</a>
              </li>
              <li>
                <a href="#Side">Side</a>
              </li>
              <li>
                <a href="#Drinks">Drinks</a>
              </li>
              <li>
                <a href="#Deserts">Deserts</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container foodmenu">
          <div className="foodmenu__category">APPETIZERS</div>

          <div className="foodmenu__grid">
            <div className=" xyz foodmenu__item new">
              <div className="foodmenu__item__heading">
                <span className="foodmenu__item__heading-name">Heading</span>
                <span className="foodmenu__item__heading-price">$9.0</span>
              </div>
              <p className="foodmenu__item__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ex est, scelerisque ut enim in, faucibus venenatis neque.
              </p>
            </div>
            <div className=" xyz foodmenu__item">
              <div className="foodmenu__item__heading">
                <span className="foodmenu__item__heading-name">Heading</span>
                <span className="foodmenu__item__heading-price">$9.0</span>
              </div>
              <p className="foodmenu__item__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ex est, scelerisque ut enim in, faucibus venenatis neque.
              </p>
            </div>
            <div className=" xyz foodmenu__item new">
              <div className="foodmenu__item__heading">
                <span className="foodmenu__item__heading-name">Heading</span>
                <span className="foodmenu__item__heading-price">$9.0</span>
              </div>
              <p className="foodmenu__item__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              </p>
            </div>
            <div className=" xyz foodmenu__item">
              <div className="foodmenu__item__heading">
                <span className="foodmenu__item__heading-name">Heading</span>
                <span className="foodmenu__item__heading-price">$9.0</span>
              </div>
              <p className="foodmenu__item__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ex est, scelerisque ut enim in, faucibus venenatis neque.
              </p>
            </div>
            <div className=" xyz foodmenu__item">
              <div className="foodmenu__item__heading">
                <span className="foodmenu__item__heading-name">Heading</span>
                <span className="foodmenu__item__heading-price">$9.0</span>
              </div>
              <p className="foodmenu__item__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ex est, scelerisque ut enim in, faucibus venenatis neque.
              </p>
            </div>
            <div className=" xyz foodmenu__item new">
              <div className="foodmenu__item__heading">
                <span className="foodmenu__item__heading-name">Heading</span>
                <span className="foodmenu__item__heading-price">$9.0</span>
              </div>
              <p className="foodmenu__item__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              </p>
            </div>
            <div className=" xyz foodmenu__item">
              <div className="foodmenu__item__heading">
                <span className="foodmenu__item__heading-name">Heading</span>
                <span className="foodmenu__item__heading-price">$9.0</span>
              </div>
              <p className="foodmenu__item__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ex est, scelerisque ut enim in, faucibus venenatis neque.
              </p>
            </div>
            <div className=" xyz foodmenu__item">
              <div className="foodmenu__item__heading">
                <span className="foodmenu__item__heading-name">Heading</span>
                <span className="foodmenu__item__heading-price">$9.0</span>
              </div>
              <p className="foodmenu__item__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ex est, scelerisque ut enim in, faucibus venenatis neque.
              </p>
            </div>
            <div className=" xyz foodmenu__item new">
              <div className="foodmenu__item__heading">
                <span className="foodmenu__item__heading-name">Heading</span>
                <span className="foodmenu__item__heading-price">$9.0</span>
              </div>
              <p className="foodmenu__item__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              </p>
            </div>
            <div className=" xyz foodmenu__item">
              <div className="foodmenu__item__heading">
                <span className="foodmenu__item__heading-name">Heading</span>
                <span className="foodmenu__item__heading-price">$9.0</span>
              </div>
              <p className="foodmenu__item__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ex est, scelerisque ut enim in, faucibus venenatis neque.
              </p>
            </div>
            <div className=" xyz foodmenu__item">
              <div className="foodmenu__item__heading">
                <span className="foodmenu__item__heading-name">Heading</span>
                <span className="foodmenu__item__heading-price">$9.0</span>
              </div>
              <p className="foodmenu__item__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ex est, scelerisque ut enim in, faucibus venenatis neque.
              </p>
            </div>
            <div className=" xyz foodmenu__item new">
              <div className="foodmenu__item__heading">
                <span className="foodmenu__item__heading-name">Heading</span>
                <span className="foodmenu__item__heading-price">$9.0</span>
              </div>
              <p className="foodmenu__item__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              </p>
            </div>
            <div className=" xyz foodmenu__item">
              <div className="foodmenu__item__heading">
                <span className="foodmenu__item__heading-name">Heading</span>
                <span className="foodmenu__item__heading-price">$9.0</span>
              </div>
              <p className="foodmenu__item__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ex est, scelerisque ut enim in, faucibus venenatis neque.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="sec" />
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 vAlign">
              <Block
                heading="Subscribe"
                subheading="Newsletter"
                text="Be the first one to know about our newest menu items & latest offers.
                More Food. Less Money. Commence Mouthwatering."
                href="/"
                href_text="Subscribe"
              />
            </div>
            <div className="col-xs-12 col-sm-6 vAlign">
              {/* <div className="widescreen-ratio" /> */}
            </div>
          </div>
        </div>
      </section>

      <footer />
    </>
  );
};

export default Menu;
