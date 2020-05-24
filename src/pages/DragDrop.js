import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ContentTop from "../components/ContentTop";
import Navbar from "../components/Navbar";
import Download from "../images/Download.png";
import Vector from "../images/Vector.png";
import Drag from "../images/Drag.png";
import Process from "../images/Process.png";
import DeleteNotifications from "../components/DeleteNotifications";
import { Link } from 'react-router-dom';

const DragDrop = () => {
  const [notification, setNotification] = useState(false);

  return (
    <div className="content drag__drop__content">
       <ContentTop layout={
        <h1 className="content__heading" style={{ fontSize: '30px' }}>
          <Link to="/projects"><span>Projects</span></Link>
          <span style={{ margin: '0 10px' }}>></span>
          Project number 1
        </h1>}
      />
      <Navbar />

      <div className="drag__drop">
        <NavLink to="/upload">
          <img className="drag__drop_img" src={Drag} alt="" />
        </NavLink>
        <h1 className="dd">Drag & Drop</h1>
        <p>
          Drop your .csv file anywhere or{" "}
          <a href="/upload">select it from your computer.</a>
        </p>
      </div>
      <div className="block">
        <div className="block__text">
          <div className="first textblock">
            <p>
              <img src={Download} alt="con" />
              Download <a href="/upload">here </a>our .csv template to speed up
              the process.
            </p>
            <p>
              <img className="simg" src={Vector} alt="icon" />
              Files requirements. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <div className="second textblock">
            <p>
              <img src={Vector} alt="icon" />
              Template requirements. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit
            </p>
            <p>
              <img className="simg" src={Vector} alt="icon" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      <div className="cancel__button">
        <button
          className="shorttable__button newprojectbutton cancel"
          style={{ cursor: "pointer" }}
          onClick={() => setNotification(true)}
        >
          Cancel upload
        </button>
        {notification && (
          <DeleteNotifications setNotification={setNotification} />
        )}
      </div>

      <div className="footer">
        <img className="rop_img" src={Process} alt="" />
      </div>
    </div>
  );
};

export default DragDrop;
