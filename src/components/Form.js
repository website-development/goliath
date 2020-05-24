import React from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
  return (
    <div className="form__wrapper">
      <form className="form">
        <h1 className="form__heading">Hello.</h1>
        <p className="form__subheading">Welcome back! Login to continue.</p>
        <div className="form__input-container">
          <img src="/icons/user-icon.svg" alt="user-icon" className="form__icon" />
          <label className="form__label" htmlFor="name">Name</label>
          <input className="form__input" type="text" id="name" name="name" placeholder="Enter email or username" />
        </div>
        <div className="form__input-container">
          <img src="/icons/password-icon.svg" alt="password-icon" className="form__icon" />
          <label className="form__label" htmlFor="password">Password</label>
          <input className="form__input" type="password" id="password" name="password" placeholder="Enter password" />
          <p className="form__forgotten">Need help?</p>
        </div>
        <Link to="/home" className="form__submit">Login</Link>
        <p className="form__text">Or use your Google account</p>
        <button className="form__submit" type="button"><img src="/icons/google-icon.svg" alt="Google icon" />Login with Google</button>
        <p className="form__text">First time here? <a href="/pass" className="form__link">Sign in</a></p>
      </form>
    </div>
  );
};

export default Form;