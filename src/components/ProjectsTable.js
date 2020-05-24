import React from "react";

import Arrow from "../components/Arrow";
import ProjectsTableRow from "../components/ProjectsTableRow";

const ProjectsTable = () => {
  const theadTitles = [
    "name",
    "date",
    "records",
    "status",
    "business case",
    "client",
  ];
  const projects = [
    {
      name: "Proyecto número 1",
      date: "03 mar 2019 | 10:57",
      records: "150.356 records",
      status: "processing",
      businessCase: "reducción de mora",
      client: "Carrefour",
      datasets: [
        {
          name: "Dataset 1",
          date: "03 mar 2019 | 10:57",
          records: "150.356 records",
          status: "processing",
          businessCase: "reducción de mora",
          client: "Carrefour",
        },
        {
          name: "Dataset 2",
          date: "03 mar 2019 | 10:57",
          records: "150.356 records",
          status: "processing",
          businessCase: "reducción de mora",
          client: "Carrefour",
        },
        {
          name: "Dataset 3",
          date: "03 mar 2019 | 10:57",
          records: "150.356 records",
          status: "processing",
          businessCase: "reducción de mora",
          client: "Carrefour",
        },
      ],
    },
    {
      name: "Proyecto número 2",
      date: "03 mar 2019 | 10:57",
      records: "51.356 records",
      status: "ok",
      businessCase: "reducción de mora",
      client: "Carrefour",
      datasets: [],
    },
    {
      name: "Proyecto número 3",
      date: "03 mar 2019 | 10:57",
      records: "51.356 records",
      status: "ok",
      businessCase: "reducción de mora",
      client: "Carrefour",
      datasets: [],
    },
  ];

  return (
    <div style={{ paddingRight: "80px", boxSizing: "border-box" }}>
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

        <tbody>
          {projects.map((project) => (
            <ProjectsTableRow key={project.name} project={project} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
