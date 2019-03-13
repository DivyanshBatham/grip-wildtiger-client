// Import Vender Components:
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { throttle } from "throttle-debounce";
import { animateScroll as scroll } from "react-scroll";

// Import Local components:
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Bar from "./pages/Bar";
import Reservation from "./pages/Reservation";

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkTheme: false,
      defaultState: { width: "", left: "" }
    };
  }

  handleMouseEnter = e => {
    const targetData = e.target.getBoundingClientRect();
    this.setState({
      hoverState: {
        width: targetData.width,
        left: targetData.left
      }
    });
  };

  handleMouseLeave = e => {
    this.setState({
      hoverState: false
    });
  };

  handleClick = e => {
    const targetData = e.target.getBoundingClientRect();
    if (e.target.getAttribute("class"))
      scroll.scrollToTop({ smooth: true, duration: 500 });
    this.setState({
      defaultState: {
        width: targetData.width,
        left: targetData.left
      }
    });
  };

  findAndSetUnderline = () => {
    const targetData = document
      .querySelector(".main-nav .active")
      .getBoundingClientRect();
    this.setState({
      defaultState: {
        width: targetData.width,
        left: targetData.left
      }
    });
  };

  handleScroll = e => {
    // console.log("SCROLLING window.scrollY = ", window.scrollY);
    const darkTheme = window.scrollY > 100; // Set darkTheme when scrolled 100.
    if (darkTheme !== this.state.darkTheme) {
      this.setState({ darkTheme });
    }

    // HELP - If possible, I want to change the bg-color of menu navbar (on /menu /bar) when the navbar hits top.
    // Check whether .foodmenu__nav exits:
    // const foodmenu = document.querySelector('.foodmenu__nav');
  };

  componentDidMount = () => {
    this.setState({
      appMounted: true
    });
    window.addEventListener(
      "scroll",
      throttle(300, () => {
        // Throttled function
        // console.log("SCROLLING window.scrollY = ", window.scrollY, " (throttle)");
        const darkTheme = window.scrollY > 100; // Set darkTheme when scrolled 100.
        if (darkTheme !== this.state.darkTheme) {
          this.setState({ darkTheme });
        }
      })
    );
  };

  componentWillUnmount = () => {
    // window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <>
          <Navbar
            darkTheme={this.state.darkTheme}
            handleMouseEnter={this.handleMouseEnter}
            handleMouseLeave={this.handleMouseLeave}
            handleClick={this.handleClick}
            // findAndSetUnderline={this.findAndSetUnderline}
            defaultState={this.state.defaultState}
            hoverState={this.state.hoverState}
          />
          <Route
            exact
            path="/"
            // component={Home}
            render={props => {
              return (
                <Home
                  findAndSetUnderline={this.findAndSetUnderline}
                  appMounted={this.state.appMounted}
                />
              );
            }}
          />
          <Route
            path="/menu"
            // component={Menu}
            render={props => {
              return (
                <Menu
                  findAndSetUnderline={this.findAndSetUnderline}
                  appMounted={this.state.appMounted}
                />
              );
            }}
          />
          {/* <Route path="/menu/:category" component={Menu} />  */}
          {/* If category names are fixed */}
          <Route
            path="/bar"
            // component={Bar}
            render={props => {
              return (
                <Bar
                  findAndSetUnderline={this.findAndSetUnderline}
                  appMounted={this.state.appMounted}
                />
              );
            }}
          />
          <Route
            path="/reservation"
            // component={Reservation}
            render={props => {
              return (
                <Reservation
                  findAndSetUnderline={this.findAndSetUnderline}
                  appMounted={this.state.appMounted}
                  routerProps={props}
                />
              );
            }}
          />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
