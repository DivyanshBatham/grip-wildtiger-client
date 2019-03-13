import React, { Component } from "react";
import Select from "react-select";
import DayPickerInput from "react-day-picker/DayPickerInput";
// import DayPicker from "react-day-picker/DayPicker";
import "react-day-picker/lib/style.css";
import { formatDate, parseDate } from "react-day-picker/moment";
import "moment/locale/it"; // HELP: Now sure, why it's here.
import moment from "moment";
import fire from "../config/fire";
import { Link as ScrollLink } from "react-scroll";

import { times } from "./Timings";

const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const numberRegex = /^(\+\d{1,3}[- ]?)?(\d{10}|\d{3}[- ]?\d{3}[- ]?\d{4}|\(\d{3}\)[- ]?\d{3}[- ]?\d{4})$/;
moment.locale("en");

const getMinutes = time => {
  // eslint-disable-next-line no-unused-vars
  let [x, h, mm, A] = time.match(/(\d+):(\d+) (AM|PM)/);
  return +h * 60 + +mm;
};

const getTimeOptions = day => {
  let defaultTimeOptions = [
    { value: "11:00 AM", label: "11:00 AM" },
    { value: "11:15 AM", label: "11:15 AM" },
    { value: "11:30 AM", label: "11:30 AM" },
    { value: "11:45 AM", label: "11:45 AM" },
    { value: "12:00 PM", label: "12:00 PM" },
    { value: "12:15 PM", label: "12:15 PM" },
    { value: "12:30 PM", label: "12:30 PM" },
    { value: "12:45 PM", label: "12:45 PM" },
    { value: "1:00 PM", label: "1:00 PM" },
    { value: "1:15 PM", label: "1:15 PM" },
    { value: "1:30 PM", label: "1:30 PM" },
    { value: "1:45 PM", label: "1:45 PM" },
    { value: "2:00 PM", label: "2:00 PM" },
    { value: "2:15 PM", label: "2:15 PM" },
    { value: "2:30 PM", label: "2:30 PM" },
    { value: "2:45 PM", label: "2:45 PM" },
    { value: "3:00 PM", label: "3:00 PM" },
    { value: "3:15 PM", label: "3:15 PM" },
    { value: "3:30 PM", label: "3:30 PM" },
    { value: "3:45 PM", label: "3:45 PM" },
    { value: "4:00 PM", label: "4:00 PM" },
    { value: "4:15 PM", label: "4:15 PM" },
    { value: "4:30 PM", label: "4:30 PM" },
    { value: "4:45 PM", label: "4:45 PM" },
    { value: "5:00 PM", label: "5:00 PM" },
    { value: "5:15 PM", label: "5:15 PM" },
    { value: "5:30 PM", label: "5:30 PM" },
    { value: "5:45 PM", label: "5:45 PM" },
    { value: "6:00 PM", label: "6:00 PM" },
    { value: "6:15 PM", label: "6:15 PM" },
    { value: "6:30 PM", label: "6:30 PM" },
    { value: "6:45 PM", label: "6:45 PM" },
    { value: "7:00 PM", label: "7:00 PM" },
    { value: "7:15 PM", label: "7:15 PM" },
    { value: "7:30 PM", label: "7:30 PM" },
    { value: "7:45 PM", label: "7:45 PM" },
    { value: "8:00 PM", label: "8:00 PM" },
    { value: "8:15 PM", label: "8:15 PM" },
    { value: "8:30 PM", label: "8:30 PM" },
    { value: "8:45 PM", label: "8:45 PM" }
  ];
  if (["Monday", "Tuesday", "Wednesday", "Thursday"].includes(day))
    return defaultTimeOptions;
  if (day === "Friday")
    return [
      ...defaultTimeOptions,
      { value: "9:00 PM", label: "9:00 PM" },
      { value: "9:15 PM", label: "9:15 PM" },
      { value: "9:30 PM", label: "9:30 PM" },
      { value: "9:45 PM", label: "9:45 PM" }
    ];
  // return defaultTimeOptions.push(
  //   { value: "9:00 PM", label: "9:00 PM" },
  //   { value: "9:15 PM", label: "9:15 PM" },
  //   { value: "9:30 PM", label: "9:30 PM" },
  //   { value: "9:45 PM", label: "9:45 PM" }
  // );
  if (day === "Saturday")
    return [
      ...defaultTimeOptions,
      { value: "9:00 PM", label: "9:00 PM" },
      { value: "9:15 PM", label: "9:15 PM" },
      { value: "9:30 PM", label: "9:30 PM" },
      { value: "9:45 PM", label: "9:45 PM" }
    ].slice(4);
  if (day === "Sunday") return defaultTimeOptions.slice(4);
};

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      errors: {},
      date: "",
      time: "",
      guests: "",
      guestOptions: [
        { value: "1", label: "1 Person" },
        { value: "2", label: "2 People" },
        { value: "3", label: "3 People" },
        { value: "4", label: "4 People" },
        { value: "5", label: "5 People" },
        { value: "6", label: "6 People" },
        { value: "7", label: "7 People" },
        { value: "8", label: "8 People" },
        { value: "9", label: "9 People" },
        { value: "10", label: "10 People" },
        { value: "11", label: "11 People" },
        { value: "12", label: "12 People" },
        { value: "13", label: "13 People" },
        { value: "14", label: "14 People" },
        { value: "15", label: "15 People" },
        { value: "16", label: "16 People" },
        { value: "17", label: "17 People" },
        { value: "18", label: "18 People" },
        { value: "19", label: "19 People" },
        { value: "20", label: "20 People" },
        { value: "20+", label: "More than 20, Party?" }
      ],
      timeOptions: []
    };
  }
  //   const times = {
  //     Monday: "11:00AM - 9:00PM",
  //     Tuesday: "11:00AM - 9:00PM",
  //     Wedneday: "11:00AM - 9:00PM",
  //     Thursday: "11:00AM - 9:00PM",
  //     Friday: "11:00AM - 10:00PM",
  //     Saturday: "12:00AM - 10:00PM",
  //     Sunday: "12:00AM - 9:00PM"
  //   };

  selectGuest = (guests, actionMeta) => {
    this.setState({
      guests: guests
    });
    // Live errors:
    // this.setState(prevState=>({
    //   guests: guests,
    //   errors: {
    //     ...prevState.errors,
    //     guests: ''
    //   }
    // }));
  };

  selectTime = (time, actionMeta) => {
    this.setState({
      time: time
    });
    // Live errors:
    // this.setState(prevState => ({
    //   time: time,
    //   errors: {
    //     ...prevState.errors,
    //     time: ""
    //   }
    // }));
  };

  selectDate = date => {
    // No need to worry about time zones.
    // console.log(
    //   moment(date)
    //     .utcOffset("-0800")
    //     .format("LLLL")
    // );

    // Generate timeOptions according to date:
    let day = moment(date).format("dddd");
    let newTimeOptions = getTimeOptions(day);

    // If the reservation is for today, then reduce the options:
    if (moment(date).format("L") === moment(new Date()).format("L")) {
      let time = moment(new Date()).format("LT");
      // Calculate next feassible slot (pivot):
      // eslint-disable-next-line no-unused-vars
      let [x, h, mm, A] = time.match(/(\d+):(\d+) (AM|PM)/);
      // console.log(x,time);
      let H = +h + !((15 * ~~(+mm / 15) + 15) % 60);
      let MM = (15 * ~~(+mm / 15) + 15) % 60;
      let pivot = `${H}:${(MM + "00").slice(0, 2)} ${A}`;
      // pivot = "10:00 PM"; // For debugging.

      let pivotIndex = newTimeOptions.findIndex(
        option => option.value === pivot
      );
      let pivotMinutes = H * 60 + MM;
      // let pivotMinutes = getMinutes(pivot);
      let closingTimeMinutes = getMinutes(
        newTimeOptions[newTimeOptions.length - 1].value
      );
      // console.table({
      //   H,
      //   MM,
      //   pivot,
      //   pivotIndex,
      //   closingTimeMinutes,
      //   pivotMinutes,
      //   closingTime: newTimeOptions[newTimeOptions.length - 1].value
      // }); // For debugging.
      if (pivotMinutes > closingTimeMinutes) newTimeOptions = [];
      else if (pivotIndex !== -1)
        newTimeOptions = newTimeOptions.slice(pivotIndex);
    }

    this.setState({
      date: date,
      timeOptions: newTimeOptions
    });
    // Live errors:
    // this.setState(prevState => ({
    //   date: date,
    //   timeOptions: newTimeOptions,
    //   errors: {
    //     ...prevState.errors,
    //     date: ""
    //   }
    // }));
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log("handleSubmit()");
    // Clean up the email :
    // this.setState({
    //   isSubmitted: true
    // });

    let name = this.nameInput.value;
    let number = this.numberInput.value;
    let email = this.emailInput.value;

    let errors = {};

    // Check for empty fields:
    if (name === "") errors.name = "* name is required";
    if (number === "") errors.number = "* number is required";
    else if (!numberRegex.test(number))
      errors.number = "* number is invalid";

    if (email === "") errors.email = "* email is required";
    else if (!emailRegex.test(email)) errors.email = "* email is invalid";

    if (this.state.time === "") errors.time = "* time is required";
    if (this.state.guests === "") errors.guests = "* guests is required";
    if (this.state.date === "") errors.date = "* date is required";

    if (Object.entries(errors).length === 0 && errors.constructor === Object) {
      // console.log("Sending data to firebase");
      const reservationData = {
        name: name,
        number: number,
        email: email,
        // date: this.state.date,
        date: moment(this.state.date).format("dddd, MMMM Do YYYY"),
        time: this.state.time.value,
        guests: this.state.guests.value,
        isApproved: false
      };
      // console.log(reservationData);
      fire
        .database()
        .ref("reservations")
        .push(reservationData);
      this.setState({
        isSubmitted: true
      });
    } else {
      // console.log("Errors is the form");
      this.setState({
        errors
      });
    }

    // if (emailRegex.test(email)) {
    // } else {
    //   // alert("Invalid Email");
    //   if (email === "")
    //     this.setState({ isEmailPresent: false, isValidEmail: true });
    //   else this.setState({ isValidEmail: false, isEmailPresent: true });
    // }
  };

  resetForm = () => {
    this.nameInput.value = "";
    this.numberInput.value = "";
    this.emailInput.value = "";
    this.setState({
      isSubmitted: false,
      errors: {},
      date: "",
      time: "",
      guests: ""
    });
  };

  render() {
    return (
      <>
        <div className="happyhour">
          <h5 className="happyhour__heading">Make Online Reservation</h5>
          <p className="happyhour__description">
            Fill the form and we will contact you *
          </p>
          <div className="reservationForm">
            <div className="booking-form">
              <div
                className="inputWrapper"
                data-error={this.state.errors.date}
                style={{ zIndex: 12 }}
              >
                <DayPickerInput
                  dayPickerProps={{
                    enableOutsideDays: false,
                    disabledDays: [
                      {
                        before: moment().toDate()
                      }
                    ]
                  }}
                  inputProps={{ readOnly: true }}
                  onDayChange={this.selectDate}
                  formatDate={formatDate}
                  parseDate={parseDate}
                  format="DD/MM/YYYY"
                  placeholder="Date"
                  value={this.state.date}
                />
              </div>
              <div
                className="inputWrapper"
                data-error={this.state.errors.time}
                style={{ zIndex: 11 }}
              >
                <Select
                  isSearchable={false}
                  options={this.state.timeOptions}
                  value={this.state.time}
                  placeholder="Time"
                  onChange={this.selectTime}
                  className="selector"
                  classNamePrefix="selector"
                  data-error={this.state.errors.time}
                />
              </div>
              <div
                className="inputWrapper"
                data-error={this.state.errors.guests}
                style={{ zIndex: 10 }}
              >
                <Select
                  isSearchable={false}
                  options={this.state.guestOptions}
                  value={this.state.guests || this.props.guests}
                  placeholder="Guests"
                  onChange={this.selectGuest}
                  className="selector"
                  classNamePrefix="selector"
                  data-error={this.state.errors.guests}
                />
              </div>
            </div>

            <div className="booking-form personalDetails">
              <div className="inputWrapper" data-error={this.state.errors.name}>
                <input
                  type="text"
                  placeholder="Your Name"
                  ref={el => (this.nameInput = el)}
                />
              </div>
              <div
                className="inputWrapper"
                data-error={this.state.errors.number}
              >
                <input
                  type="text"
                  // placeholder="Your Number (+1 999 999 9999)"
                  // placeholder="Your Number (###) ###-####"
                  placeholder="Your Number +1 (999) 999-9999"
                  ref={el => (this.numberInput = el)}
                />
              </div>
              <div
                className="inputWrapper"
                data-error={this.state.errors.email}
              >
                <input
                  type="text"
                  placeholder="Your Email Address"
                  ref={el => (this.emailInput = el)}
                />
              </div>
            </div>

            <div className="vAlign">
              <button className="cta cta-sub" onClick={this.handleSubmit}>
                Submit
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
              <p className="formAlert__heading">Wonderful! You're all set!</p>
              <p>
                Sit tight and we'll send you an email once we confirm your
                reservation.
              </p>
              <p>
                Also,&nbsp;
                <ScrollLink
                  className="formAlert__link"
                  to="subTarget"
                  smooth={true}
                  duration={1000} // constant time no matter what distance is.
                  // duration={ distance =>  (distance*2 ) }
                >
                  Subscribe
                </ScrollLink>
                &nbsp;to our newletter and be the first one to know about our
                newest menu items & latest offers.
              </p>
            </div>
          </div>

          <p className="happyhour__terms">
            * Alternatively, You can call us at +1 (360) 882-8887
            {/* * Alternatively, You can call us at +1 360 882 8887 */}
          </p>
        </div>
      </>
    );
  }
}

export default Booking;
