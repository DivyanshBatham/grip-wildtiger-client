import React from "react";

const Timings = props => {
  const times = {
    Monday: "11:00AM - 9:00PM",
    Tuesday: "11:00AM - 9:00PM",
    Wedneday: "11:00AM - 9:00PM",
    Thursday: "11:00AM - 9:00PM",
    Friday: "11:00AM - 10:00PM",
    Saturday: "12:00AM - 10:00PM",
    Sunday: "12:00AM - 9:00PM"
  };
  // const times = {
  //   Monday: "11 AM - 9 PM",
  //   Tuesday: "11 AM - 9 PM",
  //   Wedneday: "11 AM - 9 PM",
  //   Thursday: "11 AM - 9 PM",
  //   Friday: "11 AM - 10 PM",
  //   Saturday: "12 AM - 10 PM",
  //   Sunday: "12 AM - 9 PM"
  // };

  let spans = [];

  for (let day in times) {
    spans.push(
      <div className="schedule__timings-row" key={day}>
        <span className="day">{day}</span>
        <span className="time">{times[day]}</span>
      </div>
    );
  }

  if (props.forFooter) return <>{spans}</>;

  return (
    <div className="schedule">
      <h5 className="schedule__heading">We are open</h5>
      <h5 className="schedule__subheading">7 days a week</h5>
      {/* <div className="schedule__timings"> */}
      {spans}
      {/* </div> */}
    </div>
  );
};

export default Timings;
