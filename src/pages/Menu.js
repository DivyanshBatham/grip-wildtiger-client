import React, { Component } from "react";
import { Route, Redirect, NavLink } from "react-router-dom";

import Hero from "../components/Hero";
import Block from "../components/Block";
import Menulist from "../components/Menulist";

import menu from "../menudata";
import HappyHourMenu from "../components/HappyHourMenu";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // defaultState: { width: "", left: "" }
      // activeCategory: "Appetizers",
      menu: {}
    };
    // this.myRef = React.createRef()
  }

  fixHorizontalScroll = () => {
    var curX = document.querySelector(".foodmenu__nav a.active").offsetLeft;
    var X = document.querySelector(".heronav__logo").offsetLeft;
    document.querySelector(".foodmenu__nav").scrollLeft = curX - X;
    // console.table({curX,X,sub: curX-X});
  };

  scrollToMe = () => {
    // console.log("scroll, ", this.myRef.current.offsetTop);
    //  window.scrollTo(0, 500);
    //  window.scrollTo(0, this.myRef.current.offsetTop);
  };

  componentDidMount() {
    // alert("Component Mounted");
    window.scrollTo(0, 0);

    // Mimicking api fetch request:
    // setTimeout(() => {
    this.setState({
      menu
    });
    // this.props.history.push(`/menu/${Object.keys(menu)[0]}`);
    // }, 2000);
    // console.log(this.props);
  }

  render() {
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

          {/* ********************** TODO - Add App Shells for navbar and menu items ************************ */}
          <div className="scrollME" />
          <nav className="foodmenu__nav">
            <div className="container">
              <ul>
                {Object.keys(this.state.menu).map(category => {
                  return (
                    // <li key={category} onClick={this.scrollToMe}>
                    <li key={category}>
                      <NavLink to={`/menu/${category}`}>{category}</NavLink>
                      {/* <NavLink to={`/menu/${category}`} onClick={this.fixHorizontalScroll}>{category}</NavLink> */}
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* Can use it like this: */}
          {/* Generate RegEx for :category */}

          <Route exact path="/menu" render={props => <p>Matched</p>} />
          <Route
            exact
            path="/menu"
            render={props => <Redirect to={`/menu/${Object.keys(menu)[0]}`} />}
          />
          <Route
            // path="/menu/:category(soup|test)" For later add 404 for no category match
            path="/menu/:category"
            render={props => {
              // window.scrollTo(0, 0);
              // console.log("Inside Route, ", props);
              let { category } = props.match.params;
              if (this.state.menu[category])
                return (
                  <Menulist
                    category={props.match.params.category}
                    data={this.state.menu[category]}
                  />
                );
              else return <Redirect to={`/menu/${Object.keys(menu)[0]}`} />;
              // else return <Redirect to={`/menu/${Object.keys(this.state.menu)[0]}`} />;
              // else
              //   return (
              //     <Menulist
              //       category={Object.keys(this.state.menu)[0]}
              //       data={this.state.menu[Object.keys(this.state.menu)[0]]}
              //     />
              //   );
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

export default Menu;
