import React from 'react';
import location from '../assets/location-dot-solid.svg';
import phone from '../assets/phone-solid.svg';
import email from '../assets/envelope-solid.svg';

function Contact() {
  return (
    <div id="contacts">
      <h2>Get in Touch</h2>
      <p>
        Great vision without great people is irrelevant
        {' '}
        <span>Let&apos;s work together</span>
      </p>
      <div className="contact-content">
        <div className="social">
          <div className="address">
            <img className="address-icon" src={location} alt="location" />
            <div>
              <h3>Address</h3>
              <p>Gaza, Palestine</p>
            </div>
          </div>
          <div className="phone">
            <img className="phone-icon" src={phone} alt="location" />
            <div>
              <h3>Phone</h3>
              <p>059 583 2625</p>
            </div>
          </div>
          <div className="email">
            <img className="email-icon" src={email} alt="location" />
            <div>
              <h3>Email</h3>
              <p>shathaqudaih17@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <textarea type="text" placeholder="Type Your Message.." />
          <input className="submit" type="submit" />
          {/* <button type="submit">Submit</button> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
