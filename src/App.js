// Import Vender Components:
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { throttle } from "throttle-debounce";

// Import Local components:
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Bar from "./pages/Bar";
import Reservation from "./pages/Reservation";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkTheme: false,
      // currentPage: 'Home',
    };
  }

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

  componentWillMount = () => {
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
          <Navbar darkTheme={this.state.darkTheme} />
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          {/* <Route path="/menu/:category" component={Menu} />  */}
          {/* If category names are fixed */}
          <Route path="/bar" component={Bar} />
          <Route path="/reservation" component={Reservation} />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
