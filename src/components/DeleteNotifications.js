import React from 'react';

const DeleteNotifications = ({ setNotification }) => {
  return ( 
    <>
    <div onClick={() => setNotification(false)} className="cover-layer black-layer"></div>
    <div className="deletenotification">
      <div className="deletenotification__top">
        <img
          className="deletenotification__delete"
          src="/icons/cross-icon.svg"
          alt="cross icon"
          onClick={() => setNotification(false)}
        />
        <p className="deletenotification__title">Are you sure?</p>
      </div>
      <div className="deletenotification__middle">
        <p className="deletenotification__text">
          Are you sure you want to delete Lorem ipsum dolor sit amae?<br />
          <strong>This action cannot be reversed.</strong>
        </p>
        <div className="deletenotification__border">
          <button className="deletenotification__button" type="button">No, i have thoughy better</button>
        </div>
        <p onClick={() => setNotification(false)} className="deletenotification__agreement">Yes, go</p>
      </div>
    </div>
    </>
  );
};

export default DeleteNotifications;