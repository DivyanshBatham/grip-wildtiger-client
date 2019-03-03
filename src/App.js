// Import Vender Components:
import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { throttle, debounce } from "throttle-debounce";

// Import Local components:
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";

// Tried something with ScrollToTop, but it didn't worked.
// import ScrollToTop from "./components/ScrollToTop";

// import logo from '';
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkTheme: false
      // "scrollY": 0
    };
  }

  handleScroll = e => {
    // this.setState({
    //   scrollY: window.screenY
    // }) ??????

    console.log("SCROLLING window.scrollY = ", window.scrollY);
    const darkTheme = window.scrollY > 100; // Set darkTheme when scrolled 100.
    if (darkTheme !== this.state.darkTheme) {
      this.setState({ darkTheme });
    }
    // Check whether .foodmenu__nav exits:
    // const foodmenu = document.querySelector('.foodmenu__nav');
  };

  componentWillMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    // window.addEventListener(
    //   "scroll",
    //   throttle(300, () => {
    //     // Throttled function
    //     console.log("SCROLLING");
    //     const darkTheme = window.scrollY > 100; // Set darkTheme when scrolled 100.
    //     if (darkTheme !== this.state.darkTheme) {
    //       this.setState({ darkTheme });
    //     }
    //   })
    // );
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <ScrollToTop> */}
        <>
          <Navbar darkTheme={this.state.darkTheme} />
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          {/* <Route path="/menu/:category" component={Menu} />  */}
          {/* If category names are fixed */}
          <Route path="/reservation" component={Reservation} />
        </>
        {/* </ScrollToTop> */}
      </BrowserRouter>
    );
  }
}

export default App;
