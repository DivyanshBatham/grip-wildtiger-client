import React from "react";

const Hero = props => {
  // console.log("Hero.js", props);
  return (
    <header className={props.bg_class}>
      <div className="hero shadow">
        <h3 className="hero__sub">{props.sub}</h3>
        <h2 className="hero__main">{props.main}</h2>
        <button className="cta">{props.cta}</button>
      </div>
    </header>
  );
};

export default Hero;
