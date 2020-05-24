import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src="/icons/logo.svg" alt="logo" />
        <ul className="social">
          <li className="social__link">
            <img src="/icons/Linkedin.svg" alt="Linkedin icon" />
          </li>
          <li className="social__link">
            <img src="/icons/TW.svg" alt="Twitter icon" />
          </li>
          <li className="social__link">
            <img src="/icons/FB.svg" alt="Facebook icon" />
          </li>
          <li className="social__link">
            <img src="/icons/Insta.svg" alt="Instagram icon" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;