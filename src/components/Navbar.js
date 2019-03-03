import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import Underline from "./Underline";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHamActive: false,
      defaultState: { width: "", left: "" }
    };
  }

  hamburgerActive = e => {
    this.setState(prevState => ({
      isHamActive: !prevState.isHamActive
    }));
  };

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
      <>
      <nav className={this.state.isHamActive ? "hamburger__menu active" : "hamburger__menu"}>
        <ul>
          <li><NavLink exact to="/" onClick={this.hamburgerActive}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={this.hamburgerActive}>About</NavLink></li>
          <li><NavLink to="/menu/appetizers" onClick={this.hamburgerActive}>Menu</NavLink></li>
          <li><NavLink to="/bar" onClick={this.hamburgerActive}>Bar</NavLink></li>
          <li><NavLink to="/reservation" onClick={this.hamburgerActive}>Reservation</NavLink></li>
          <li><NavLink to="/contact" onClick={this.hamburgerActive}>Contact</NavLink></li>
        </ul>

      </nav>
      <nav
        className={
          "heronav " +
          (this.props.darkTheme ? " heronav-solidbg" : "") +
          (this.state.isHamActive ? " heronav-ham" : "")
        }
      >
        <div className="heronav__container container">
          <Link to="/" className="heronav__logo">
            Wild Tiger
          </Link>

          {/* <button className={ "hamburger hamburger--3dx " + (this.state.isHamActive? "is-active": "")} type="button" onClick={this.hamburgerActive}>
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button> */}
          <div
            className={
              "hamburger hamburger--3dx " +
              (this.state.isHamActive ? "is-active" : "")
            }
            onClick={this.hamburgerActive}
            tabIndex="0"
          >
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </div>

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
            {/* <li>
              <NavLink
                to="/about"
                onClick={this.handleClick}
                onMouseEnter={this.handleMouseEnter}
              >
                About
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/menu"
                // to="/menu/appetizers" THIS THROWS ERROR
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
                to="/gallert"
                onClick={this.handleClick}
                onMouseEnter={this.handleMouseEnter}
              >
                Gallery
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
      </>
    );
  }
}

export default Navbar;
