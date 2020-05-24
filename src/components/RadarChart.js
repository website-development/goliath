import React from "react";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

const Radar = () => {
  const noSmoothing = (points) => {
    var SVGPath = "";
    points.push(points[0]);

    for (var i = 0; i < points.length; i++) {
      if (i === 0) {
        SVGPath += "M" + points[i][0] + " " + points[i][1];
      } else {
        var current, previous, next;
        current = points[i];
        previous = points[i - 1];
        if (i < points.length - 1) {
          next = points[i + 1];
        } else {
          next = points[0];
        }
        var quota = 0.1;
        var median = [
          (-current[0] * quota) / (1 + quota),
          (-previous[1] * quota) / (1 + quota),
        ];
        SVGPath += "C" + previous[0] + " " + previous[1];
        SVGPath += " " + median[0] + " " + median[1];
        SVGPath += " " + current[0] + " " + current[1];
      }
      SVGPath += " ";
    }
    return SVGPath + "z";
  };

  const data = [
    {
      data: {
        idCheck: 0.7,
        geoCheck: 0.8,
        emailValidation: 0.9,
        phoneValidation: 0.67,
        phoneVerification: 0.4,
      },
      meta: { color: "orange" },
    },
  ];

  const captions = {
    idCheck: "Id check",
    geoCheck: "Geo check",
    emailValidation: "EmailValidation",
    phoneValidation: "Phone Validation",
    phoneVerification: "Phone Verification",
  };

  const options = {
    zoomDistance: 1.5,
    scales: 1,
    axes: true,
    dots: true,
    smoothing: noSmoothing,
  };

  return (
    <div className="enrichment__radar">
      <RadarChart
        options={options}
        captions={captions}
        data={data}
        size={320}
      />
    </div>
  );
};

export default Radar;
