import React from 'react';

const Notifications = ({ setNotification }) => {
  return (
    <div className="notifications">
      <div className="notifications__romb"></div>
      <div className="notifications__top">
        <img src="/icons/bell-icon-light.svg" alt="bell icon" />
        <h1 className="notifications__heading">notifications</h1>
        <img
          src="/icons/cross-icon-light.svg"
          alt="cross icon"
          onClick={() => setNotification(false)}
        />
      </div>

      <div className="notifications__content">
        <div className="notifications__message">
          <img className="message__icon" src="/images/functions/file-icon.svg" alt="file icon" />
          <div>
            <p className="message__title">Your dataset has been uploaded.</p>
            <p className="message__time">1 hour ago</p>
          </div>
        </div>

        <div className="notifications__message">
          <img className="message__icon" src="/images/functions/file-icon.svg" alt="file icon" />
          <div>
            <p className="message__title">Your dataset has been uploaded.</p>
            <p className="message__time">1 hour ago</p>
          </div>
        </div>
        
        <div className="notifications__message">
          <img className="message__icon" src="/images/functions/file-icon.svg" alt="file icon" />
          <div>
            <p className="message__title">Your dataset has been uploaded.</p>
            <p className="message__time">1 hour ago</p>
          </div>
        </div>

        <div className="notifications__message">
          <img className="message__icon" src="/images/functions/file-icon.svg" alt="file icon" />
          <div>
            <p className="message__title">Your dataset has been uploaded.</p>
            <p className="message__time">1 hour ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;