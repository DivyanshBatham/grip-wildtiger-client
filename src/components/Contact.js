import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="footer-grid__heading">Contact</div>
      <div className="contact-grid">
        <div className="contact-icons">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
          </svg>
        </div>
        {/* <div className="contact-text">+1 360 882 8887</div> */}
        <div>
          <a href="tel:+1-303-499-7111" className="contact-text">
            +1 360 882 8887
          </a>
        </div>
        <div className="contact-icons">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </div>
        <div className="contact-text">
          1825 SE 164th AVE Suite 101 Vancouver, WA 98683
        </div>
        <div className="contact-icons">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </div>
        <div className="contact-text">hello@wildtigerwa.net</div>
        <div className="contact-icons">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </div>
        <div>
          <a
            href="https://goo.gl/maps/6aKgNU1Yjxx"
            // href="google.navigation:q=Wild Tiger 1825 SE 164th AVE Suite 101 Vancouver, WA 98683"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-text"
          >
            Get Directions
          </a>
        </div>
        {/* <div className="contact-text">Get Directions</div> */}
      </div>
    </div>
  );
};

export default Contact;
