import React from "react";

const ShortTable = ({ projects }) => {
  return (
    <div className="shorttable">
      <div className="shorttable__top">
        <h2 className="shorttable__heading">Last Projects</h2>

        <button className="shorttable__button" type="button">
          New project
        </button>
      </div>

      <div style={{ overflow: "auto" }}>
        <table className="shorttable__middle">
          <tbody>
            {projects.map((project) => (
              <tr key={project.name}>
                <td>
                  <div>
                    <img
                      src="/images/functions/file-icon.svg"
                      alt="file icon"
                    />
                    {project.name}
                  </div>
                </td>
                <td>{project.owner}</td>
                <td>{project.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="shorttable__bottom">
        <img
          style={{ marginRight: "10px" }}
          src="/images/functions/eye-icon.svg"
          alt="eye icon"
        />
        See more projects
      </div>
    </div>
  );
};

export default ShortTable;
