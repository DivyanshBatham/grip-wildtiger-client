import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import Underline from "./Underline";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHamActive: false
    };
  }

  hamburgerActive = e => {
    this.setState(prevState => ({
      isHamActive: !prevState.isHamActive
    }));
  };

  render() {
    return (
      <>
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

            <button
              aria-label="Navigation"
              className={
                "hamburger hamburger--spin " +
                // "hamburger hamburger--3dx " +
                (this.state.isHamActive ? "is-active" : "")
              }
              type="button"
              onClick={this.hamburgerActive}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
            {/* <div
              className={
                "hamburger hamburger--spin " +
                // "hamburger hamburger--3dx " +
                (this.state.isHamActive ? "is-active" : "")
              }
              onClick={this.hamburgerActive}
              tabIndex="0"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div> */}

            <ul className="main-nav" onMouseLeave={this.props.handleMouseLeave}>
              <li>
                <NavLink
                  exact
                  to="/"
                  onClick={this.props.handleClick}
                  onMouseEnter={this.props.handleMouseEnter}
                >
                  Home
                </NavLink>
              </li>
              {/* <li>
              <NavLink
                to="/about"
                onClick={this.props.handleClick}
                onMouseEnter={this.props.handleMouseEnter}
              >
                About
              </NavLink>
            </li> */}
              <li>
                <NavLink
                  to="/menu"
                  // to="/menu/appetizers" THIS THROWS ERROR
                  onClick={this.props.handleClick}
                  onMouseEnter={this.props.handleMouseEnter}
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/bar"
                  onClick={this.props.handleClick}
                  onMouseEnter={this.props.handleMouseEnter}
                >
                  Bar
                </NavLink>
              </li>
              {/* <li>
              <NavLink
                to="/gallery"
                onClick={this.props.handleClick}
                onMouseEnter={this.props.handleMouseEnter}
              >
                Gallery
              </NavLink>
            </li> */}
              <li>
                <NavLink
                  to="/reservation"
                  onClick={this.props.handleClick}
                  onMouseEnter={this.props.handleMouseEnter}
                >
                  Reservation
                </NavLink>
              </li>
              {/* <li>
              <NavLink
                to="/contact"
                onClick={this.props.handleClick}
                onMouseEnter={this.props.handleMouseEnter}
              >
                Contact
              </NavLink>
            </li> */}
              <li>
                <ScrollLink
                  to="footer"
                  tabIndex="0"
                  smooth={true}
                  duration={1000} // constant time no matter what distance is.
                  // duration={ distance =>  (distance*2 ) }
                  onMouseEnter={this.props.handleMouseEnter}
                >
                  Contact
                </ScrollLink>
              </li>
              <Underline
                defaultState={this.props.defaultState}
                hoverState={this.props.hoverState}
              />
            </ul>
          </div>
        </nav>
        <nav
          className={
            this.state.isHamActive
              ? "hamburger__menu active"
              : "hamburger__menu"
          }
        >
          <ul>
            <li>
              <NavLink exact to="/" onClick={this.hamburgerActive}>
                Home
              </NavLink>
            </li>
            {/* <li><NavLink to="/about" onClick={this.hamburgerActive}>About</NavLink></li> */}
            <li>
              <NavLink to="/menu" onClick={this.hamburgerActive}>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/bar" onClick={this.hamburgerActive}>
                Bar
              </NavLink>
            </li>
            <li>
              <NavLink to="/reservation" onClick={this.hamburgerActive}>
                Reservation
              </NavLink>
            </li>
            <li>
              <ScrollLink
                to="footer"
                tabIndex="0"
                smooth={true}
                duration={1000} //constant time no matter what distance is.
                // duration={ distance =>  distance / 50 }
                onClick={this.hamburgerActive}
                // onMouseEnter={this.props.handleMouseEnter}
              >
                Contact
              </ScrollLink>
            </li>
            {/* <li><NavLink to="/contact" onClick={this.hamburgerActive}>Contact</NavLink></li> */}
          </ul>
        </nav>
      </>
    );
  }
}

export default withRouter(Navbar);
