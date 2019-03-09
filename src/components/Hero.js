import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
// import brushSvg from "../assets/brushStroke";
// import Brush from "../assets/brush-stroke.svg";

const Hero = props => {
  return (
    <header className={props.bg_class}>
      <div className="hero">
        <h3 className="hero__sub">{props.sub}</h3>
        <h2 className="hero__main">{props.main}</h2>
        {props.href && (
          <Link to={props.href} className="cta">
            {props.cta}
          </Link>
        )}
        {!props.href && (
          <ScrollLink
            className="cta"
            to="ctaTarget"
            smooth={true}
            duration={1000} // constant time no matter what distance is.
            // duration={ distance =>  (distance*2 ) }
          >
            {props.cta}
          </ScrollLink>
        )}
      </div>
      {/* <div className="brushWrapper">
        <Brush />
      </div> */}
      {/* {brushSvg} */}
    </header>
  );
};

export default Hero;
