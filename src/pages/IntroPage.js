import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

const IntroPage = () => {
  return (
    <>
      <div className="cover-layer"></div>
      <div className="intro">
        <img className="intro__image" src="/icons/intro-bg.png" alt="background woman"/>
        <div className="container">
          <Header />
          <div className="intro__content">
            <h1 className="intro__heading">This is Hocelot</h1>
            <p className="intro__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Bibendum suspendisse enim etiam aliquet libero pellentesque venenatis.
              Arcu integer quisque in sed risus, aliquam. Convallis feugiat fermentum tristique eget urna.
            </p>
            <Link to="/auth" className="intro__button">
              Discover your clients
              <img className="intro__arrow" src="/icons/arrow.svg" alt="arrow right" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroPage;