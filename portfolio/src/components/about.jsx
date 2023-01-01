import React from 'react';
import reactIcon from '../assets/react-white.png';
import jsIcon from '../assets/js-white.png';
import expressIcon from '../assets/express-white.png';
import nodeIcon from '../assets/nodejs-white.png';
import typescriptIcon from '../assets/ts-white.png';
import postgresIcon from '../assets/postgres-white.png';
import vscIcon from '../assets/vsc-white.png';
import gitIcon from '../assets/git-white.png';
import herokuIcon from '../assets/heroku-white.png';
import netlifyIcon from '../assets/netlify-white.png';
import figmaIcon from '../assets/white-figma.png';

function About() {
  return (
    <div className="about" id="about">
      <h2 className="title">About Me</h2>
      <p className="description">
        I am a highly-motivated and talented full-stack web developer
        I am experienced with all of the technology involved with building and launching
        websites.
        I am a highly-motivated and talented full-stack web developer
        I am experienced with all of the technology involved with building and launching
        websites.
        I am a highly-motivated and talented full-stack web developer
        I am experienced with all of the technology involved with building and launching
        websites.
      </p>
      <div className="skills">
        <h2>Skills & Tools</h2>
        <div className="icons">
          <div className="languages">
            <div>
              <img src={jsIcon} alt="jsIcon" />
            </div>
            <div>
              <img src={expressIcon} alt="jsIcon" />
            </div>
            <div>
              <img src={nodeIcon} alt="jsIcon" />
            </div>
            <div>
              <img src={reactIcon} alt="jsIcon" />
            </div>
            <div>
              <img src={typescriptIcon} alt="jsIcon" />
            </div>
            <div>
              <img src={postgresIcon} alt="jsIcon" />
            </div>
          </div>
          <div className="tools">
            <div>
              <img src={figmaIcon} alt="jsIcon" />
            </div>
            <div>
              <img src={vscIcon} alt="jsIcon" />
            </div>
            <div>
              <img src={herokuIcon} alt="jsIcon" />
            </div>
            <div>
              <img src={netlifyIcon} alt="jsIcon" />
            </div>
            <div>
              <img src={gitIcon} alt="jsIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
