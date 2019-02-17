import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Underline from "./Underline";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.setState({
      defaultState: {
        width: targetData.width,
        left: targetData.left
      }
    });
  };

  componentDidMount = () => {
    setTimeout(() => {
      const targetData = document
        .querySelector(".main-nav .active")
        .getBoundingClientRect();
      this.setState({
        defaultState: {
          width: targetData.width,
          left: targetData.left
        }
      });
    }, 1000);
  };

  render() {
    return (
      // <nav className="heronav heronav-solidbg">
      <nav
        className={
          this.props.darkTheme === true ? "heronav heronav-solidbg" : "heronav"
        }
      >
        <div className="heronav__container container">
          <Link to="/" className="heronav__logo">
            Wild Tiger
          </Link>
          <ul className="main-nav" onMouseLeave={this.handleMouseLeave}>
            <li>
              <NavLink
                exact
                to="/"
                onClick={this.handleClick}
                onMouseEnter={this.handleMouseEnter}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={this.handleClick}
                onMouseEnter={this.handleMouseEnter}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                onClick={this.handleClick}
                onMouseEnter={this.handleMouseEnter}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bar"
                onClick={this.handleClick}
                onMouseEnter={this.handleMouseEnter}
              >
                Bar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reservation"
                onClick={this.handleClick}
                onMouseEnter={this.handleMouseEnter}
              >
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={this.handleClick}
                onMouseEnter={this.handleMouseEnter}
              >
                Contact
              </NavLink>
            </li>
            <Underline
              defaultState={this.state.defaultState}
              hoverState={this.state.hoverState}
            />
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
