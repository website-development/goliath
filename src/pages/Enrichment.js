import React from "react";
import ContentTop from "../components/ContentTop";
import Navbar from "../components/Navbar";
import Radar from "../components/RadarChart";
import Density from "../components/Density";
import Map from "../components/Map";
import FamilyDistribution from "../components/FamilyDistribution";
// import GroupedBars from "../components/GroupedBars";
import PreHeader from "../components/PreHeader";
import PopupInfo from "../components/PopupInfo";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

const Enrichment = () => {
  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
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
              <Col xs={4}>
                <div className="enrichment__data-quality">
                  <div className="enrichment__header">
                    <h2 className="enrichment__title">data quality</h2>
                    <PopupInfo />
                  </div>

                  <Radar />

                  <div className="enrichment__bottom">
                    Porcentaje del total de registros
                  </div>
                </div>
              </Col>
              <Col xs={8}>
                <div className="enrichment__density">
                  <div className="enrichment__header">
                    <h2 className="enrichment__title">
                      Density distribution of the percentage of nulls in
                      variables
                    </h2>
                    <PopupInfo />
                  </div>
                  <Density series={series} height="210%" />
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={5}>
                <div className="enrichment__map">
                  <div className="enrichment__header">
                    <h2 className="enrichment__title">Number of records map</h2>
                    <PopupInfo />
                  </div>
                  <Map />
                </div>
              </Col>
              <Col xs={7}>
                <div className="enrichment__distribution">
                  <div className="enrichment__header">
                    <h2 className="enrichment__title">Family distribution</h2>
                    <PopupInfo />
                  </div>
                  <FamilyDistribution />
                </div>
              </Col>
            </Row>
          </Container>

          {/* <div className="enrichment__distribution">
                <div className="enrichment__header">
                  <h2 className="enrichment__title">Family distribution</h2>
                  <PopupInfo />
                </div>
                <GroupedBars />
              </div>

              <div className="enrichment__distribution">
                <div className="enrichment__header">
                  <h2 className="enrichment__title">Family distribution</h2>
                  <PopupInfo />
                </div>
                <FamilyDistribution isVertical={true} />
              </div> */}
        </div>
      </div>
    </div>
  );
};

export default Enrichment;
