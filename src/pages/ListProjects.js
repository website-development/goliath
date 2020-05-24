import React, { useState } from "react";
import ContentTop from "../components/ContentTop";
import ProjectsTable from "../components/ProjectsTable";
import Filter from "../components/Filter";
import { NavLink } from "react-router-dom";

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

const ListProjects = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const numberProjects = formatNumber(57);
  const numberOfDataset = formatNumber(125);
  const numberOfRecords = formatNumber(3005647);
  const counterNotifications = 3;

  return (
    <div className="content">
      <ContentTop layout={<h1 className="content__heading">Projects</h1>} />
      <div className="projects">
        <div className="projects__statistic">
          <div className="statistic__block">
            <span className="statistic__name">Number of projects</span>
            <span className="statistic__number">{numberProjects}</span>
          </div>
          <div className="statistic__block">
            <span className="statistic__name">Number of dataset</span>
            <span className="statistic__number">{numberOfDataset}</span>
          </div>
          <div className="statistic__block">
            <span className="statistic__name">Number of records</span>
            <span className="statistic__number">{numberOfRecords}</span>
          </div>
        </div>

        <div className="projects__helpers">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              className="projects__icon"
              src="/icons/search.svg"
              alt="search icon"
            />
            <div className="projects__filter">
              <div className="projects__notifications">
                {counterNotifications}
              </div>
              <img
                onClick={() => setFilterVisible(!filterVisible)}
                className="projects__icon"
                src="/icons/filter.svg"
                alt="filter icon"
              />
              {filterVisible && <Filter close={setFilterVisible} />}
            </div>
            <NavLink to="/projectHome">
              <button className="shorttable__button" type="button">
                New project
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <ProjectsTable />
    </div>
  );
};

export default ListProjects;
