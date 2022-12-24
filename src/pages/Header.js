import React from 'react';
import myLogo from '../images/logo.png'

const Header = () => {
  return (
    <div class = 'header'>
      <div class = 'headerContent'>
      <h1 class='title'>
        Smart Sports Book
      </h1>
      <img class = 'logo' src={myLogo} alt="Alt text" />
      </div>
    </div>
  );
};

export default Header;