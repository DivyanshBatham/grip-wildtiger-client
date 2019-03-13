import React, { Component } from "react";
import { Route, Redirect, NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import Hero from "../components/Hero";
import Block from "../components/Block";
import Menulist from "../components/Menulist";
import HappyHourMenu from "../components/HappyHourMenu";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

import menu from "../data/menudata";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // activeCategory: "Appetizers",
      menu: {}
    };
    this.myRef = React.createRef();
  }

  // fixHorizontalScroll = () => {
  //   var curX = document.querySelector(".foodmenu__nav a.active").offsetLeft;
  //   var X = document.querySelector(".heronav__logo").offsetLeft;
  //   document.querySelector(".foodmenu__nav").scrollLeft = curX - X;
  //   // console.table({curX,X,sub: curX-X});
  // };

  fixScroll = () => {
    // Vertical Scroll:
    let heronavHeight = document
      .querySelector(".heronav")
      .getBoundingClientRect().height;
    let { top: t, height: h } = this.myRef.current.getBoundingClientRect();
    let y = window.scrollY;
    let position = t + y + h - heronavHeight;
    scroll.scrollTo(position, { smooth: true, duration: 500, offset: 0 });

    // HELP: Horizontal Scroll (Smooth): Not possible according to research.
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    if (!this.props.appMounted)
      setTimeout(() => {
        this.props.findAndSetUnderline();
      }, 2000);
    else this.props.findAndSetUnderline();

    // if (this.props.routerProps.location.pathname === "/reservation/book")
    //   scroll.scrollTo(this.ctaTarget.current.offsetTop, { smooth: true, duration: 500, offset: 0 });

    // scroll.scrollTo(0, {smooth:true ,duration:1000});

    // Mimicking api fetch request:
    // setTimeout(() => {
    // this.setState({
    //   menu
    // });
    // this.props.history.push(`/menu/${Object.keys(menu)[0]}`);
    // }, 2000);
    // console.log(this.props);
  }

  render() {
    return (
      <>
        <Hero
          // sub="Browse our Delights"
          sub="Sate your Hunger with our Delights"
          main="Discover Our Menu"
          // cta="Happy Hour menu"
          cta="Craving? Choose your Appetite!"
          bg_class="menu"
        />

        <section id="ctaTarget">
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

          {/* TODO: If fetching data from API then Add App Shells for navbar and menu items */}
          <div className="scrollME" ref={this.myRef}>
            &nbsp;
          </div>
          <nav className="foodmenu__nav">
            <div className="container">
              <ul>
                {Object.keys(menu).map(category => {
                  return (
                    <li key={category}>
                      <NavLink
                        to={`/menu/${category}`}
                        onClick={this.fixScroll}
                      >
                        {category}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* <div className="smoothResize"> */}
          {/* Can use it like this: */}
          {/* Generate RegEx for :category */}

          <Route
            exact
            path="/menu"
            render={props => (
              // HELP: Should I redirect?
              <Redirect to={`/menu/${Object.keys(menu)[0]}`} />
              // OR: Should I just display the first category?
              //   const category = Object.keys(menu)[0];
              //   return <Menulist category={category} data={menu[category]} />;
            )}
          />
          <Route
            path="/menu/:category"
            render={props => {
              // window.scrollTo(0, 500);
              // this.fixScroll();
              // console.log("Inside Route, ", props);
              let { category } = props.match.params;
              if (menu[category])
                return (
                  <Menulist
                    category={props.match.params.category}
                    data={menu[category]}
                    // fixScroll={this.fixScroll}
                  />
                );
              // else return <Redirect to={"/menu"} />;
              else return <Redirect to={`/menu/${Object.keys(menu)[0]}`} />;
            }}
          />
          {/* </div> */}
        </section>

        <section className="dark-section">
          <div className="container">
            <HappyHourMenu />
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

export default Menu;
