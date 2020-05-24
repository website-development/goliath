import React, { useState } from 'react';
import Notifications from '../components/Notifications';

const ContentTop = ({ layout }) => {
  const [notification, setNotification] = useState(false);

  return (
    <div className="content__top">
      {layout}
      <div className="content__item">
        {/* <div className="content__input-wrapper">
          <input className="content__input" type="text" placeholder="Busca... y encuentra" />
          <img className="content__input-icon" src="/icons/find-icon.svg" alt="find icon" />
        </div> */}
        <img
          onClick={() => setNotification(!notification)}
          className="content__notification"
          src="/icons/bell-icon.svg"
          alt="bell icon"
        />
        {notification && <Notifications setNotification={setNotification} />}
        <div className="content__avatar"></div>
      </div>
    </div>
  );
};

export default ContentTop;