import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.container', {
        duration: 2,
        scale: 0.5,
        opacity: 0,
        delay: 0.5,
        stagger: 0.2,
        ease: 'elastic',
        force3D: true,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top center',
          end: 'bottom center',
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="about" id="about">
      <h2 className="title">About Me</h2>
      <p className="description">
        I am a highly-motivated and talented full-stack web developer (PERN stack) skilled in
        Nodejs, Express, Reactjs, Sequelize, Postgres SQL, and TypeScript.
        I am experienced with all of the technology involved with building
        and launching web applications. I have Ability to solve complex problems
        successfully with minimal guidance or help using a logical reasoning
        technique and a strong attention to detail.
      </p>
      <div className="skills">
        <h2>
          Skills
          {' '}
          <span>&</span>
          {' '}
          Tools
        </h2>
        <div className="icons" ref={ref}>
          <div className="languages">
            <div className="container">
              <img src={jsIcon} alt="jsIcon" />
              <div className="overlay">
                <div className="text">JavaScript</div>
              </div>
            </div>
            <div className="container">
              <img src={expressIcon} alt="jsIcon" />
              <div className="overlay">
                <div className="text">Express</div>
              </div>
            </div>
            <div className="container">
              <img src={nodeIcon} alt="jsIcon" />
              <div className="overlay">
                <div className="text">NodeJs</div>
              </div>
            </div>
            <div className="container">
              <img src={reactIcon} alt="jsIcon" />
              <div className="overlay">
                <div className="text">ReactJs</div>
              </div>
            </div>
            <div className="container">
              <img src={typescriptIcon} alt="jsIcon" />
              <div className="overlay">
                <div className="text">TypeScript</div>
              </div>
            </div>
            <div className="container">
              <img src={postgresIcon} alt="jsIcon" />
              <div className="overlay">
                <div className="text">Postgres SQL</div>
              </div>
            </div>
          </div>
          <div className="tools">
            <div className="container">
              <img src={figmaIcon} alt="jsIcon" />
              <div className="overlay">
                <div className="text">Figma</div>
              </div>
            </div>
            <div className="container">
              <img src={vscIcon} alt="jsIcon" />
              <div className="overlay">
                <div className="text">VSC</div>
              </div>
            </div>
            <div className="container">
              <img src={herokuIcon} alt="jsIcon" />
              <div className="overlay">
                <div className="text">Heroku</div>
              </div>
            </div>
            <div className="container">
              <img src={netlifyIcon} alt="jsIcon" />
              <div className="overlay">
                <div className="text">Netlify</div>
              </div>
            </div>
            <div className="container">
              <img src={gitIcon} alt="jsIcon" />
              <div className="overlay">
                <div className="text">Git</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
