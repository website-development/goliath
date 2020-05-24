import React from "react";
import Navbar from "../components/Navbar";
import ContentTop from "../components/ContentTop";
import Density from "../components/Density";
import Histogram from "../components/Histogram";
import Matrix from "../components/Matrix";
import Plot from "../components/Plot";
import PreHeader from "../components/PreHeader";
import PopupInfo from "../components/PopupInfo";
import Dropdown from "../components/Dropdown";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

const Model = () => {
  const series1 = [
    {
      name: "series1",
      data: [110, 110, 20, 15, 10, 5, 1],
    },
  ];

  const series2 = [
    {
      name: "series2",
      data: [10, 29, 65, 50, 80, 105, 120],
    },
    {
      name: "series3",
      data: [0, 20, 40, 60, 80, 100, 120],
    },
  ];

  return (
    <div className="content project">
      <ContentTop
        layout={
          <h1 className="content__heading" style={{ fontSize: "30px" }}>
            <Link to="/projects">
              <span>Projects</span>
            </Link>
            <span style={{ margin: "0 10px" }}>></span>
            Project number 1
          </h1>
        }
      />

      <div className="content__inner">
        <Navbar />

        <div className="enrichment">
          <div className="select_dataset">
            <div className="header">
              <p>Select dataset:</p>
              <button className="orange">
                <span>Dataset Lorem Ipsum 01</span>
              </button>
              <button className="blue">
                <span>Dataset Lorem Ipsum 02</span>
              </button>
              <button className="purple">
                <span>Dataset Lorem Ipsum 03</span>
              </button>
            </div>
          </div>
          <PreHeader />

          <Container fluid style={{ padding: "0 25px" }}>
            <Row style={{ marginBottom: "20px" }}>
              <Col xs={7}>
                <div className="enrichment__density">
                  <div className="enrichment__header">
                    <h2 className="enrichment__title">
                      Score density distinction
                    </h2>
                    <PopupInfo />
                  </div>

                  <div className="keep-square" style={{ paddingBottom: "68%" }}>
                    <Density
                      series={series1}
                      height="100%"
                      className="score-density"
                    />
                  </div>
                </div>
              </Col>

              <Col xs={5}>
                <div className="enrichment__density">
                  <div className="enrichment__header">
                    <h2 className="enrichment__title">Roc curve</h2>
                    <PopupInfo />
                  </div>

                  <span className="enrichment__label--true">
                    True positive rate
                  </span>

                  <div
                    className="keep-square"
                    style={{
                      paddingBottom: "98%",
                      width: "98%",
                      marginLeft: "auto",
                      marginBottom: "20px",
                    }}
                  >
                    <Density
                      series={series2}
                      curve={["smooth", "straight"]}
                      isDashed={true}
                      hideLegend
                      strokeColors={["#FDD226", "rgba(255, 255, 255, 0.3)"]}
                      className="rod-curve"
                      height="100%"
                    />
                  </div>

                  <span className="enrichment__label--false">
                    False positive rate
                  </span>
                </div>
              </Col>
            </Row>

            <Row style={{ marginBottom: "20px" }}>
              <Col xs={7}>
                <div className="enrichment__histogram">
                  <div className="enrichment__header">
                    <h2 className="enrichment__title">
                      Score histogram by class
                    </h2>
                    <PopupInfo />
                    <Dropdown />
                  </div>

                  <Histogram />
                </div>
              </Col>

              <Col xs={5}>
                <div className="enrichment__matrix">
                  <div className="enrichment__header">
                    <h2 className="enrichment__title">Confusion matrix</h2>
                    <PopupInfo />
                  </div>

                  <Matrix />
                </div>
              </Col>
            </Row>

            <Row style={{ marginBottom: "20px" }}>
              <Col xs={12}>
                <div className="enrichment__plot">
                  <Col xs={6} style={{ position: "static" }}>
                    <div className="enrichment__header">
                      <h2 className="enrichment__title">
                        Learning curve in K-Fold CV
                      </h2>
                      <PopupInfo />
                    </div>
                    <div>
                      <Plot hideLegend />
                    </div>
                  </Col>

                  <Col xs={6} style={{ position: "static" }}>
                    <div>
                      <div className="enrichment__header">
                        <h2 className="enrichment__title">
                          Learning curve in K-Fold averaged
                        </h2>
                        <PopupInfo />
                      </div>

                      <div>
                        <Plot />
                      </div>
                    </div>
                  </Col>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                <div className="enrichment__density">
                  <div
                    className="enrichment__header"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h2 className="enrichment__title">Importance Density</h2>
                    <PopupInfo />
                    <Dropdown />
                  </div>
                  <Density series={series1} height="200%" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Model;
