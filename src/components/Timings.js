import React from "react";

export const times = {
  Monday: "11:00 AM - 9:00 PM",
  Tuesday: "11:00 AM - 9:00 PM",
  Wedneday: "11:00 AM - 9:00 PM",
  Thursday: "11:00 AM - 9:00 PM",
  Friday: "11:00 AM - 10:00 PM",
  Saturday: "12:00 AM - 10:00 PM",
  Sunday: "12:00 AM - 9:00 PM"
};

const Timings = props => {

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
// export = Timings;

