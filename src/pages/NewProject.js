import React from "react";
import ContentTop from "../components/ContentTop";
import NewProjectTable from "../components/NewProjectTable";
import Navbar from "../components/Navbar";
import PreHeader from "../components/PreHeader";
import { NavLink, Link } from "react-router-dom";

const newProject = () => {
  return (
    <div className="content project">
      <ContentTop
        layout={
          <h1 className="content__heading" style={{ fontSize: "30px" }}>
            <Link to="/projects">
              <span>Projects</span>
            </Link>
            <span style={{ margin: "0 10px" }}>></span>
            Project number 1
          </h1>
        }
      />

      <div className="content__inner">
        <Navbar />
        <PreHeader />
        <div className="projects newproject">
          <div className="projects__helpers">
            <div style={{ display: "flex", alignItems: "center" }}>
              <NavLink to="/dragdrop">
                <button
                  className="shorttable__button newprojectbutton"
                  type="button"
                >
                  Upload dataset
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        <NewProjectTable />
      </div>
    </div>
  );
};

export default newProject;
