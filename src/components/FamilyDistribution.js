import React from "react";

const FamilyDistribution = ({ isVertical }) => {
  const vertical = isVertical ? "vertical" : "";
  const row = isVertical ? "row" : "";
  const cnRow = `familydistribution__row ${vertical}`;
  const cnChart = `familydistribution__chart ${row}`;

  return (
    <div className="familydistribution">
      <div className="familydistribution__labels">
        <h3 className="familydistribution__label">Number of members</h3>
        <h3 className="familydistribution__label">Number of parents</h3>
        <h3 className="familydistribution__label">Number of babies</h3>
        <h3 className="familydistribution__label">Number of scholars</h3>
        <h3 className="familydistribution__label">Number of dependents</h3>
      </div>
      <div className={cnChart}>
        <div className={cnRow}>
          <div className="familydistribution__graph-20"></div>
          <div className="familydistribution__graph-31"></div>
          <div className="familydistribution__graph-18"></div>
          <div className="familydistribution__graph-23"></div>
          <div className="familydistribution__graph-8"></div>
        </div>

        <div className={cnRow}>
          <div className="familydistribution__graph-15"></div>
          <div className="familydistribution__graph-20"></div>
          <div className="familydistribution__graph-17"></div>
          <div className="familydistribution__graph-35"></div>
          <div className="familydistribution__graph-13"></div>
        </div>

        <div className={cnRow}>
          <div className="familydistribution__graph-20"></div>
          <div className="familydistribution__graph-10"></div>
          <div className="familydistribution__graph-45"></div>
          <div className="familydistribution__graph-5"></div>
          <div className="familydistribution__graph-20"></div>
        </div>

        <div className={cnRow}>
          <div className="familydistribution__graph-36"></div>
          <div className="familydistribution__graph-10"></div>
          <div className="familydistribution__graph-9"></div>
          <div className="familydistribution__graph-35"></div>
          <div className="familydistribution__graph-10"></div>
        </div>

        <div className={cnRow}>
          <div className="familydistribution__graph-10"></div>
          <div className="familydistribution__graph-13"></div>
          <div className="familydistribution__graph-55"></div>
          <div className="familydistribution__graph-14"></div>
          <div className="familydistribution__graph-8"></div>
        </div>
      </div>

      <div className="familydistribution__markers">
        <div className="familydistribution__marker">
          <div className="familydistribution__elipse"></div>
          <h4 className="familydistribution__label">1</h4>
        </div>

        <div className="familydistribution__marker">
          <div className="familydistribution__elipse"></div>
          <h4 className="familydistribution__label">2</h4>
        </div>

        <div className="familydistribution__marker">
          <div className="familydistribution__elipse"></div>
          <h4 className="familydistribution__label">3</h4>
        </div>

        <div className="familydistribution__marker">
          <div className="familydistribution__elipse"></div>
          <h4 className="familydistribution__label">4</h4>
        </div>

        <div className="familydistribution__marker">
          <div className="familydistribution__elipse"></div>
          <h4 className="familydistribution__label">5</h4>
        </div>
      </div>
    </div>
  );
};

export default FamilyDistribution;
