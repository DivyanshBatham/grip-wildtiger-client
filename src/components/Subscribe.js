import React, { Component } from "react";
// import { Link } from "react-router-dom";
import fire from "../config/fire";

const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      errors: {},
    };
  }

  // handleChange = event => {
  //   this.setState({ email: event.target.value });
  // };

  handleSubmit = event => {
    event.preventDefault();

    let email = this.emailInput.value;
    let errors = {};

    if (email === "") errors.email = "* email is required";
    else if (!emailRegex.test(email)) errors.email = "* email is invalid";

    if (Object.entries(errors).length === 0 && errors.constructor === Object) {
      fire
        .database()
        .ref("subscribers")
        .push({ email: email, status: "subscribed", isVerified: false });
      this.setState({
        isSubmitted: true,
        email: email,
        status: "subscribed",
        isVerified: false
      });
    } else {
      this.setState({
        errors
      });
    }

  };

  resetForm = () => {
    this.emailInput.value = ""; // <- clear the input
    this.setState({
      isSubmitted: false,
      errors: {},
    });
  };

  render() {
    return (
      <>
        <div className="block-head">
          <h4 className="block__heading">Subscribe</h4>
          <h3 className="block__subheading">Newsletter</h3>
        </div>
        <div className="block-body vAlign">
          {/* <div className="container"> */}
          <p>
            Be the first one to know about our newest menu items & latest
            offers.
            <br />
            <br />
            More Food. Less Money. Commence Mouthwatering.
          </p>
          {/* </div> */}

          <form onSubmit={this.handleSubmit} className="subscriptionForm">
            {/* <div className="container"> */}
            <div className="vAlign">
              <div
                className="inputWrapper inputWrapper-subs"
                data-error={this.state.errors.email}
              >
                <input
                  type="text"
                  aria-label="Subscription Form"
                  placeholder="Enter your e-mail here"
                  ref={el => (this.emailInput = el)}
                />
              </div>
              <button className="cta cta-sub" onClick={this.handleSubmit}>
                Subscribe Now
              </button>
            </div>
            <div
              className={
                this.state.isSubmitted ? "formAlert show" : "formAlert"
              }
            >
              <div className="formAlert__close" onClick={this.resetForm}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
              <p className="formAlert__heading">
                Wonderful! You're almost set!
              </p>
              <p>
                {/* Wonderful! You are just one step away from getting our
                newsletters. */}
                We have sent you a confirmation email.
              </p>
              <p>
                Didn't received? Check your Spam Folder, Contact us on
                hello@wildtigerwa.net
              </p>
            </div>
            {/* </div> */}
          </form>
          {/* )} */}
        </div>
      </>
    );
  }
}

export default Subscribe;
