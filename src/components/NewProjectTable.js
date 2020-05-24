import React from "react";

import Arrow from "../components/Arrow";
import NewProjectTableRow from "../components/NewProjectTableRow";

const ProjectsTable = () => {
  const theadTitles = ["name", "date", "records", "status"];
  const projects = [
    {
      name: "",
      date: "",
      records: "",
      status: "",
      datasets: [
        {
          name: "Dataset lorem ipsum 01",
          date: "30 abr 2019 | 10:57",
          records: "51.356 records",
          status: "ok",
        },
        {
          name: "Dataset lorem ipsum 02",
          date: "30 abr 2019 | 10:57",
          records: "51.356 records",
          status: "Uploading | 97%",
        },
        {
          name: "Dataset lorem ipsum 03",
          date: "30 abr 2019 | 10:57",
          records: "51.356 records",
          status: "Uploading | 97%",
        },
      ],
    },
  ];

  return (
    <div
      style={{
        paddingRight: "80px",
        boxSizing: "border-box",
        overflow: "auto",
      }}
    >
      <table className="projectstable">
        <thead>
          <tr>
            {theadTitles.map((title) => (
              <th key={title}>
                <div className="projectstable__th">
                  {title}
                  <div className="projectstable__icon-wrapper">
                    <Arrow direction={"top"} />
                    <Arrow direction={"bottom"} />
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="tbody__newproject">
          {projects.map((project) => (
            <NewProjectTableRow key={project.name} project={project} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
