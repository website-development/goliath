import React, { useState } from "react";
import cn from "classnames";
import DeleteNotifications from "./DeleteNotifications";
import { NavLink } from "react-router-dom";

const CharacteristicsTableRow = ({ characteristic }) => {
  const percentageClass = characteristic.porcentage > 20 ? "red" : "green";

  return (
    <>
      <tr className="characteristics__row" style={{ height: "70px" }}>
        <td>{characteristic.variable}</td>
        <td>{characteristic.datatype}</td>
        <td>{characteristic.ejemplo}</td>
        <td>{characteristic.valores}</td>
        <td>{characteristic.formatErrors}</td>
        <td>{characteristic.nulos}</td>
        <td>
          <div className="characteristics__graph">
            <div
              className={`characteristics__stroke--${percentageClass}`}
              style={{ width: `${characteristic.porcentage}%` }}
            ></div>
          </div>
          <span className={`characteristics__percentage--${percentageClass}`}>
            {characteristic.porcentage}%
          </span>
        </td>
      </tr>
    </>
  );
};

export default CharacteristicsTableRow;
