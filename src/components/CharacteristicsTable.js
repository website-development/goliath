import React from "react";
import Arrow from "../components/Arrow";
import CharacteristicsTableRow from "../components/CharacteristicsTableRow";

const CharacteristicsTable = () => {
  const theadTitles = [
    "variable",
    "data type",
    "ejemplo",
    "nº valores únicos",
    "nº records with format errors",
    "nº de nulos",
    "porcentaje de nulos",
  ];
  const data = [
    {
      variable: "Fecha",
      datatype: "int64",
      ejemplo: "2019193",
      valores: "2",
      formatErrors: 5,
      nulos: "0",
      porcentage: "0",
    },
    {
      variable: "Fecdhdada",
      datatype: "int64",
      ejemplo: "201d9193",
      valores: "2",
      formatErrors: 4,
      nulos: "0",
      porcentage: "30",
    },
    {
      variable: "Fdeha",
      datatype: "int32",
      ejemplo: "2019193133",
      valores: "2",
      formatErrors: 0,
      nulos: "0",
      porcentage: "20",
    },
  ];

  return (
    <div className="projectstable__wrapper">
      <table className="projectstable">
        <thead>
          <tr style={{ height: "70px" }}>
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
          {data.map((characteristic) => (
            <CharacteristicsTableRow
              key={characteristic.variable}
              characteristic={characteristic}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CharacteristicsTable;
