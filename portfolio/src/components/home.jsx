/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import homeImage from '../assets/Designer girl-bro (1).png';

function Home() {
  return (
    <div className="home" id="home">
      <div className="brief">
        <p className="hi">Hi There !</p>
        <p className="name">
          I&apos;m
          <span> Shatha K. Eqdaih</span>
        </p>
        <p className="role">Software Engineer | Full Stack Web Developer</p>
        <div className="view-cv"><a href="../assets/shatha resume .pdf" download>Download CV</a></div>
        <div className="icons">
          <a href="https://www.linkedin.com/in/shatha-eqdaih/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="linkedin" icon={faLinkedin} /></a>
          <a href="https://twitter.com/shathakeq" target="_blank" rel="noreferrer"><FontAwesomeIcon className="twitter" icon={faTwitter} /></a>
          <a href="https://github.com/shathakh" target="_blank" rel="noreferrer"><FontAwesomeIcon className="github" icon={faGithub} /></a>
        </div>
      </div>
      <img className="programmer-photo" src={homeImage} alt="programmer" />
    </div>
  );
}

export default Home;
