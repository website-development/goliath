import React from "react";
import { CircleProgress } from "react-gradient-progress";

const DatasetGraph = () => {
  const percentage = 90;

  return (
    <div className="datasetgraph">
      <h2 className="shorttable__heading">Dataset upload proccess</h2>
      <h3 className="datasetgraph__subheading">dataset name here</h3>
      <CircleProgress
        percentage={percentage}
        width={180}
        fill={"#2F3942"}
        primaryColor={["#FDD226", "#FF5753"]}
        strokeWidth={8}
        fontColor={"white"}
        fontSize={"36px"}
        fontFamily={"Montserrat"}
      />

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

export default DatasetGraph;
