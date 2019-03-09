import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
  }

  handleChange = event => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // alert("Form Submitted");
    alert("Form Submitted: " + this.state.email);
  };

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <div className="block-head">
            <h4 className="block__heading">Subscribe</h4>
            <h3 className="block__subheading">Newsletter</h3>
          </div>
          <div className="block-body vAlign">
            <p>
              Be the first one to know about our newest menu items & latest
              offers.
              <br />
              <br />
              More Food. Less Money. Commence Mouthwatering.
            </p>
            <input
              type="text"
              placeholder="Enter your e-mail here"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button className="cta cta-sub" onClick={this.handleSubmit}>
              Subscribe Now
            </button>
          </div>
        </form>
    );
  }
}

export default Subscribe;
