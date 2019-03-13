import React, { Component } from "react";
import { Route, Redirect, NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import Hero from "../components/Hero";
import Block from "../components/Block";
import Menulist from "../components/Menulist";
import HappyHourMenu from "../components/HappyHourMenu";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

import menu from "../data/bardata";

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // menu: {}
    };
    this.myRef = React.createRef();
  }

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
    // this.setState({
    //   menu
    // });
  }

  render() {
    return (
      <>
        <Hero
          //   sub="Browse our Delights"
          //   sub="Select from our wide range"
          sub="We serve Geniune and Classic Drinks" // classic
          main="The Bar"
          cta="Thirsty? Pick a drink from our shelf!"
          //   cta="Thirsty? Have a drink from our shelf"
          //   cta="Thirsty? Browse"
          bg_class="bar-bg"
        />

        <section id="ctaTarget">
          <div className="container">
            <div className="row">
              <div className="col-10 offset-1">
                <Block
                  heading="Relax At"
                  // heading="Chill at"
                  subheading="The Bar"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex est, scelerisque ut enim in, faucibus venenatis neque. Vivamus finibus dapibus nisi, vitae condimentum lacus."
                />
              </div>
            </div>
          </div>

          {/* TODO: Add App Shells for navbar and menu items ************************ */}
          <div className="scrollME" ref={this.myRef}>
            &nbsp;
          </div>
          <nav className="bar__nav">
            <div className="container">
              <ul>
                {Object.keys(menu).map(category => {
                  return (
                    // <li key={category} onClick={this.scrollToMe}>
                    <li key={category}>
                      <NavLink to={`/bar/${category}`} onClick={this.fixScroll}>
                        {category}
                      </NavLink>
                      {/* <NavLink to={`/menu/${category}`} onClick={this.fixHorizontalScroll}>{category}</NavLink> */}
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* Can use it like this: */}
          {/* Generate RegEx for :category */}

          {/* <Route exact path="/bar" render={props => <p>Matched</p>} /> */}
          <Route
            exact
            path="/bar"
            render={props => <Redirect to={`/bar/${Object.keys(menu)[0]}`} />}
          />
          <Route
            // path="/menu/:category(soup|test)" For later add 404 for no category match
            path="/bar/:category"
            render={props => {
              // window.scrollTo(0, 0);
              // console.log("Inside Route, ", props);
              let { category } = props.match.params;
              if (menu[category])
                return (
                  <Menulist
                    category={props.match.params.category}
                    data={menu[category]}
                  />
                );
              else return <Redirect to={`/bar/${Object.keys(menu)[0]}`} />;
            }}
          />
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

export default Bar;
