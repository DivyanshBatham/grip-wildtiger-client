// Import Vender Components:
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import Local components:
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";

// import logo from '';
import "./App.scss";

class App extends Component {

  handleScroll = (e) => {
    console.log(e);
    const nav = document.querySelector('nav');
  }

  componentWillMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    console.log(process.env.PUBLIC_URL);
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <div className="App" onScroll={this.handleScroll}> */}
        <>
          <Navbar />
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
