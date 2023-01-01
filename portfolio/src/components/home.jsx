import React from 'react';
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
      </div>
      <img className="programmer-photo" src={homeImage} alt="programmer" />
    </div>
  );
}

export default Home;
