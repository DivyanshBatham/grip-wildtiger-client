import React, { Component } from "react";
import Select from "react-select";
import DayPickerInput from "react-day-picker/DayPickerInput";
// import DayPicker from "react-day-picker/DayPicker";
import "react-day-picker/lib/style.css";
import { formatDate, parseDate } from "react-day-picker/moment";
import "moment/locale/it"; // HELP: Now sure, why it's here.
import moment from "moment";

import { times } from "./Timings";

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
      date: "",
      time: undefined,
      guests: undefined,
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

  handleBooking = event => {
    event.preventDefault();
    alert("Booking Done");
  };

  selectGuest = (guests, actionMeta) => {
    // console.log(count, actionMeta);
    this.setState({
      guests: guests
    });
  };

  selectTime = (time, actionMeta) => {
    this.setState({
      time: time
    });
  };

  handleStartDayChange = date => {
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
  };

  componentDidMount = () => {
    // console.log("Booking Mounted");
    // if (this.props.guests)
    //   this.setState({
    //     guests: this.props.guests
    //   });
    // console.log(times);
    // let time = moment(new Date().getTime())
    //   .utcOffset("-0800")
    //   .format("HH:mm");
    // let day = moment(new Date().getTime())
    //   .utcOffset("-0800")
    //   .format("dddd");
    // let [h, m] = time.split(":");
    // console.log(time, day, h, m);
    // export const times = {
    //   Monday: "11:00AM - 9:00PM",
    //   Tuesday: "11:00AM - 9:00PM",
    //   Wedneday: "11:00AM - 9:00PM",
    //   Thursday: "11:00AM - 9:00PM",
    //   Friday: "11:00AM - 10:00PM",
    //   Saturday: "12:00AM - 10:00PM",
    //   Sunday: "12:00AM - 9:00PM"
    // };
    // let [hh, mm, HH, MM] = times[day].match(/\d+/g);
    // console.log(hh, mm, HH, MM);
  };

  render() {
    // console.log("Booking Rendered");
    return (
      <>
        <div className="happyhour">
          <h5 className="happyhour__heading">Make Online Reservation</h5>
          <p className="happyhour__description">
            Fill the form and we will contact you *
          </p>

          <div className="booking-form">
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
              onDayChange={this.handleStartDayChange}
              formatDate={formatDate}
              parseDate={parseDate}
              format="DD/MM/YYYY"
              placeholder="Date"
              value={this.state.date}
            />
            <Select
              isSearchable={false}
              options={this.state.timeOptions}
              value={this.state.time}
              placeholder="Time"
              onChange={this.selectTime}
              className="selector"
              classNamePrefix="selector"
            />
            <Select
              isSearchable={false}
              options={this.state.guestOptions}
              value={this.state.guests || this.props.guests}
              placeholder="Guests"
              onChange={this.selectGuest}
              className="selector"
              classNamePrefix="selector"
            />
          </div>

          <div className="booking-form personalDetails">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Number" />
            <input type="text" placeholder="Your Email" />
          </div>

          <div className="vAlign">
            <button className="cta cta-sub" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
          {/* <ul style={{ color: "white" }}>
            <li>Date</li>
            <li>Time Slots (Every 15mins)</li>
            <li>
              Number of Guests (1,2,3,4,5,6, 6+) Choose the number of guests
              going
            </li>
            <li>Guest Details - *Name, *Mobile, email, any special request,</li>
          </ul> */}

          <p className="happyhour__terms">
            * Alternatively, You can call us at +1 360 882 8887
          </p>
        </div>
      </>
    );
  }
}

export default Booking;
