import React, { useState } from "react";

import DeleteNotifications from "./DeleteNotifications";

const ProjectsTableRow = ({ project }) => {
  const [notification, setNotification] = useState(false);

  return (
    <>
      {project.datasets.map((dataset) => (
        <tr key={dataset.name}>
          <td>
            <img
              style={{ opacity: 0.5 }}
              src="/images/functions/file-icon.svg"
              alt="processor icon"
            />
            {dataset.name}
          </td>
          <td>{dataset.date}</td>
          <td>{dataset.records}</td>
          <td>{dataset.status}</td>
          <td>{dataset.businessCase}</td>
          <td>{dataset.client}</td>
          <td className="projectstable__dropdown-image">
            <img
              style={{ cursor: "pointer" }}
              src="/icons/trash-icon.svg"
              alt="trash icon"
              onClick={() => setNotification(true)}
            />
            {notification && (
              <DeleteNotifications setNotification={setNotification} />
            )}
          </td>
        </tr>
      ))}

      <tr style={{ height: "20px" }}></tr>
    </>
  );
};

export default ProjectsTableRow;
