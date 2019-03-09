import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Block = props => {
  return (
    <>
      <div className="block-head">
        <h4 className="block__heading">{props.heading}</h4>
        <h3 className="block__subheading">{props.subheading}</h3>
      </div>
      <div className="block-body">
        <p>
          {props.text}
          {props.href && (
            <>
              <br />
              {props.href.slice(0, 3) === "tel" && (
                <a href={props.href} className="block-link except-mobile">
                  {props.href_text}
                </a>
              )}
              {props.href.slice(0, 3) !== "tel" && (
                <Link to={props.href} className="block-link except-mobile">
                  {props.href_text}
                </Link>
              )}
            </>
          )}
          {!props.href && props.href_text && (
            <>
              <br />
              <ScrollLink
                className="block-link except-mobile"
                to="ctaTarget"
                smooth={true}
                duration={1000} // constant time no matter what distance is.
                // duration={ distance =>  (distance*2 ) }
                onClick={props.onClickHandler}
              >
                {props.href_text}
              </ScrollLink>
            </>
          )}
        </p>
      </div>
    </>
  );
};

export default Block;
