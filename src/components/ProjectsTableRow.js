import React, { useState } from 'react';
import cn from 'classnames';
import DeleteNotifications from './DeleteNotifications';
import { NavLink } from 'react-router-dom';

const ProjectsTableRow = ({ project }) => {
  const [active, setActive] = useState(false);
  const [notification, setNotification] = useState(false);

  return (
    <>
     <tr className="projectstable__bodyrow">
        <td><NavLink to='/projectHome'><img src="/icons/processor-table.svg" alt="processor icon" />{project.name}</NavLink></td>
        <td> <NavLink to='/projectHome'>{project.date}</NavLink></td>
        <td>  <NavLink to='/projectHome'>{project.records}</NavLink></td>
        <td>  <NavLink to='/projectHome'>{project.status}</NavLink></td>
        <td>  <NavLink to='/projectHome'>{project.businessCase}</NavLink></td>
        <td>  <NavLink to='/projectHome'>{project.client}</NavLink></td>
        <td onClick={() => setActive(!active)} className="projectstable__dropdown-image">
          <img src="/icons/arrow-down.svg" alt="arrow down" style={{ paddingRight: '40px', cursor: 'pointer' }} />
        </td>
      </tr>

      {project.datasets.map(dataset => (
        <tr key={dataset.name} className={cn("projectstable__dropdown", {
          'active': active
        })}>
          <td><img src="/images/functions/file-icon.svg" alt="processor icon" />{dataset.name}</td>
          <td>{dataset.date}</td>
          <td>{dataset.records}</td>
          <td>{dataset.status}</td>
          <td>{dataset.businessCase}</td>
          <td>{dataset.client}</td>
          <td className="projectstable__dropdown-image">
            <img style={{ cursor: 'pointer' }} src="/icons/trash-icon.svg" alt="trash icon" onClick={() => setNotification(true)} />
            {notification && <DeleteNotifications setNotification={setNotification} />}
          </td>
        </tr>
      ))}

      <tr style={{ height: '20px'}}></tr>

    </>
  );
};

export default ProjectsTableRow;