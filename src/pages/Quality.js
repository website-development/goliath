import React from "react";
import ContentTop from "../components/ContentTop";
import Navbar from "../components/Navbar";
import Density from "../components/Density";
import HorizontalCharts from "../components/HorizontalCharts";
import PreHeader from "../components/PreHeader";
import Donut from "../components/Donut";
import PopupInfo from "../components/PopupInfo";
import Cobro from "../components/Cobro";
import Dropdown from "../components/Dropdown";
import CharacteristicsTable from "../components/CharacteristicsTable";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

const Quality = () => {
  const series1 = [
    {
      name: "series1",
      data: [110, 110, 20, 15, 10, 5, 1],
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
              <button className="blue" disabled>
                <span>Dataset Lorem Ipsum 02</span>
              </button>
              <button className="purple">
                <span>Dataset Lorem Ipsum 03</span>
              </button>
            </div>
          </div>
          <PreHeader
            mainImg={"/images/typing.jpeg"}
            secondaryImg={"/images/lake.jpg"}
          />

          <Container fluid style={{ padding: "0 25px" }}>
            <Row style={{ marginBottom: "20px" }}>
              <Col xs={7}>
                <Row style={{ marginBottom: "20px" }}>
                  <Col xs={6}>
                    <div className="enrichment__density">
                      <div className="enrichment__header">
                        <h2 className="enrichment__title">treated records</h2>
                        <PopupInfo />
                      </div>
                      <Donut />
                    </div>
                  </Col>

                  <Col xs={6}>
                    <div className="enrichment__density">
                      <div className="enrichment__header">
                        <h2 className="enrichment__title">
                          distribution of the percentage of missings in
                          variables
                        </h2>
                        <PopupInfo />
                      </div>

                      <Density series={series1} />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <div className="enrichment__density">
                      <div className="enrichment__header">
                        <h2 className="enrichment__title">Cobro l12m</h2>
                        <PopupInfo />
                        <Dropdown />
                      </div>

                      <Cobro />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={5}>
                <div className="enrichment__density">
                  <div className="enrichment__header">
                    <h2 className="enrichment__title">Percentage of missing</h2>
                    <PopupInfo />
                  </div>

                  <HorizontalCharts />
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                <div className="characteristics">
                  <div className="enrichment__header">
                    <h2 className="enrichment__title">
                      Characteristics of the variables
                    </h2>
                    <PopupInfo />
                  </div>

                  <CharacteristicsTable />
                </div>
              </Col>
            </Row>
          </Container>

          {/* <div className="enrichment__container">
            <div style={{ marginRight: "20px" }}>
              <div style={{ display: "flex" }}>
                <div
                  className="enrichment__density"
                  style={{
                    marginRight: "20px",
                    position: "relative",
                    marginBottom: "20px",
                    flex: "1 1 50%",
                  }}
                >
                  <div className="enrichment__header">
                    <h2 className="enrichment__title">treated records</h2>
                    <PopupInfo />
                  </div>
                  <Donut />
                </div>

                <div
                  className="enrichment__density"
                  style={{
                    marginBottom: "20px",
                    flex: "1 1 50%",
                  }}
                >
                  <div className="enrichment__header">
                    <h2 className="enrichment__title">
                      distribution of the percentage of missings in variables
                    </h2>
                    <PopupInfo />
                  </div>

                  <Density width={435} series={series1} />
                </div>
              </div>
              <div className="enrichment__density" style={{}}>
                <div className="enrichment__header">
                  <h2 className="enrichment__title">Cobro l12m</h2>
                  <PopupInfo />
                  <Dropdown />
                </div>

                <Cobro />
              </div>
            </div>
            <div className="enrichment__density">
              <div className="enrichment__header">
                <h2 className="enrichment__title">Percentage of missing</h2>
                <PopupInfo />
              </div>

              <HorizontalCharts />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Quality;
