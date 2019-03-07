import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
// import brushSvg from "../assets/brushStroke";
// import Brush from "../assets/brush-stroke.svg";

const Hero = props => {
  // console.log("Hero.js", props);
  return (
    <header className={props.bg_class}>
      <div className="hero shadow">
        <h3 className="hero__sub">{props.sub}</h3>
        <h2 className="hero__main">{props.main}</h2>
        {/* <ScrollLink
         className="cta"
          to="footer"
          smooth={true}
          duration={1000} // constant time no matter what distance is.
          // duration={ distance =>  (distance*2 ) }
          // onMouseEnter={this.handleMouseEnter}
        >
          Contact
        </ScrollLink> */}

        <button className="cta">{props.cta}</button>
      </div>
      {/* <div className="brushWrapper">
        <Brush />
      </div> */}
      {/* {brushSvg} */}
    </header>
  );
};

export default Hero;
