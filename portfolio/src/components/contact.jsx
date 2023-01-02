/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u7mpsks', 'template_6awg92g', e.target, 'azqUW2plBdqqF4ru6')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });

    e.target.reset();
  };
  return (
    <div id="contacts">
      <h2>Get in Touch</h2>
      <p className="statement">
        Great vision without great people is irrelevant
        {' '}
        <span>Let&apos;s work together</span>
      </p>
      <div className="contact-content">
        <div className="social">
          <div className="address">
            <FontAwesomeIcon className="address-icon" icon={faLocationDot} />
            <div className="info">
              <h3>Address</h3>
              <p>Gaza, Palestine</p>
            </div>
          </div>
          <div className="phone">
            <FontAwesomeIcon className="phone-icon" icon={faPhone} />
            <div className="info">
              <h3>Phone</h3>
              <p><a href="https://api.whatsapp.com/send?phone=970595832625" target="_blank" rel="noreferrer">+970 595 832 625</a></p>
            </div>
          </div>
          <div className="email">
            <FontAwesomeIcon className="email-icon" icon={faEnvelope} />
            <div className="info">
              <h3>Email</h3>
              <p><a href="mailto:shathaqudaih17@gmail.com" target="_blank" rel="noreferrer">shathaqudaih17@gmail.com</a></p>
            </div>
          </div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/shatha-eqdaih/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="linkedin" icon={faLinkedin} /></a>
            <a href="https://twitter.com/shathakeq" target="_blank" rel="noreferrer"><FontAwesomeIcon className="twitter" icon={faTwitter} /></a>
            <a href="https://github.com/shathakh" target="_blank" rel="noreferrer"><FontAwesomeIcon className="github" icon={faGithub} /></a>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={sendEmail}>
            <input name="name" type="text" placeholder="Full Name" required />
            <input name="email" type="email" placeholder="Email" required />
            <textarea name="message" type="text" placeholder="Type Your Message.." required />
            <button type="submit" className="submit-btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
