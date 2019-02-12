import React from "react";
import { Link } from "react-router-dom";

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
          <br />
          <Link to={props.href} className="block-link">
            {props.href_text}
          </Link>
        </p>
      </div>
    </>
  );
};

export default Block;
