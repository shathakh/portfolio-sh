import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [fixed, setFix] = useState(false);
  const [clicked, setClick] = useState(false);

  const setFixed = () => {
    if (window.scrollY > 300) setFix(true);
    else setFix(false);
  };

  const handelClick = () => {
    setClick(!clicked);
  };

  window.addEventListener('scroll', setFixed);

  return (
    <div className={fixed ? 'scrolling' : 'header'}>
      <div className="logo">ShathaKh</div>
      <div className="content-list">
        <ul className={clicked ? 'navbar active' : 'navbar'}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </div>
      <div id="mobile">
        <FontAwesomeIcon onClick={handelClick} className="bar-icon" icon={clicked ? faTimes : faBars} />
      </div>
    </div>
  );
}

export default Header;
