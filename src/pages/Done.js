import React from "react";
import { NavLink } from "react-router-dom";
import ContentTop from "../components/ContentTop";
import Navbar from "../components/Navbar";

import Icon from "../images/Icon.png";
import Process2 from "../images/Process2.png";

const DragDrop = () => {
  return (
    <div className="content drag__drop__content">
      <ContentTop
        layout={<h1 className="content__heading">Project number 1</h1>}
      />
      <Navbar />

      <div className="drag__drop">
        <NavLink to="/home">
          <img className="drag__drop_img" src={Icon} alt="" />
        </NavLink>
        <div>
          <h2 className="dataset">Dataset lorem ipsum 01</h2>
        </div>
        <p className='last'>Give it a name which identifies the dataset.</p>
      
        <NavLink to='/done'>
        <button className="shorttable__button upload" type="button">
          <span>Continue</span>
        </button>
        </NavLink>
      </div>

      <div className="block">
        <div className="block__text"></div>
      </div>

      <div className="footer">
        <img className="rop_img" src={Process2} alt="" />
      </div>
    </div>
  );
};

export default DragDrop;
