// Import Vender Components:
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Import Local components:
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";

// import logo from '';
import "./App.scss";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "darkTheme": false,
      // "scrollY": 0
    }
  }

  handleScroll = e => {
    // this.setState({
    //   scrollY: window.screenY
    // }) ??????
    
    const darkTheme = window.scrollY > 100; // Set darkTheme when scrolled 100.
    if (darkTheme !== this.state.darkTheme) {
      this.setState({ darkTheme });
    }

    // Check whether .foodmenu__nav exits:
    // const foodmenu = document.querySelector('.foodmenu__nav');
  };

  componentWillMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  // componentDidUnmount = () => {
  //   window.removeEventListener("scroll", this.handleScroll);
  // };

  render() {
    // console.log(process.env.PUBLIC_URL);
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <div className="App" onScroll={this.handleScroll}> */}
        <>
          <Navbar darkTheme={this.state.darkTheme}/>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/reservation" component={Reservation} />
        </>
        {/* </div> */}
      </BrowserRouter>
    );
  }
}

export default App;
