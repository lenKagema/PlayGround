import React from 'react';

import Image from '../images/react-icon-small.png';

function Navbar() {
  return (
    <nav>
      <img src={Image} alt="react-small-icon-logo" className="nav--icon" />
      <h3 className="nav--logo-text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;