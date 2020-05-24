import React from "react";

const Matrix = () => {
  return (
    <div className="enrichment__heatmap">
      <div className="keep-square">
        <div className="heatmap__left">
          <span className="heatmap__choice">No</span>
          <span className="heatmap__title">Prediction</span>
          <span className="heatmap__choice">Yes</span>
        </div>

        <div className="heatmap__wrapper">
          <div className="heatmap"></div>
          <div className="heatmap"></div>
          <div className="heatmap"></div>
          <div className="heatmap"></div>
        </div>

        <div className="heatmap__bottom">
          <span className="heatmap__choice">No</span>
          <span className="heatmap__title">Recobrado</span>
          <span className="heatmap__choice">Yes</span>
        </div>
      </div>

      <div className="heatmap__legend">
        <div className="heatmap__labels">
          <span>0</span>
          <span>Percentage</span>
          <span>100</span>
        </div>
      </div>
    </div>
  );
};

export default Matrix;
