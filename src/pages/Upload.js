import React from "react";
import { NavLink } from "react-router-dom";
import ContentTop from "../components/ContentTop";
import Navbar from "../components/Navbar";

import IconDragDrop from "../images/IconDragDrop.png";
import Process2 from "../images/Process2.png";

const Upload = () => {
  return (
    <div className="content drag__drop__content">
      <ContentTop
        layout={<h1 className="content__heading">Project number 1</h1>}
      />
      <Navbar />

      <div className="drag__drop">
        <NavLink to="/done">
          <img className="drag__drop_img" src={IconDragDrop} alt="" />
        </NavLink>
        <div>
          <div className="input">Enter dataset name</div>
        </div>
        <p>Give it a name which identifies the dataset.</p>
        <p className="last">It will help you in the future to find it.</p>
        <NavLink to='/done'>
        <button className="shorttable__button upload" type="button">
          <span>Save name</span>
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

export default Upload;
