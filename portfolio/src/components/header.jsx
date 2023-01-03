import React, { useState } from 'react';

function Header() {
  const [fixed, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY > 300) setFix(true);
    else setFix(false);
  };

  window.addEventListener('scroll', setFixed);

  return (
    <div className={fixed ? 'scrolling' : 'header'}>
      <div className="logo">ShathaKh</div>
      <div className="content-list">
        <ul className="navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </div>
      
    </div>
  );
}

export default Header;
