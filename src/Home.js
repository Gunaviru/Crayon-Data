import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import refreshIcon from "./assets/images/icons/refresh.svg";

const Styles = styled.article`
  .page-header {
    .text-small {
      font-size: 13px;
    }
    .custom-button {
      background: #fff;
      .custom-margin {
        margin-top: -3px;
      }
    }
  }
  .page-content {
    background: #ffffff;
    border: 1px solid #f2f5f7;
    box-sizing: border-box;
    border-radius: 3px;
    min-height: calc(100vh - 167px);
  }
`;

const Home = () => {
  return (
    <Styles>
      <Container fluid className="py-3 page-header">
        <Row className="align-items-center">
          <Col>
            <h3>
              Home
              <small className="ml-2 text-small text-muted">
                Last sync on 05 Nov, 2019
              </small>
            </h3>
          </Col>
          <Col>
            <div
              role="toolbar"
              aria-label="Page Toolbar"
              className="btn-toolbar justify-content-end"
            >
              <div
                role="group"
                aria-label="Refresh Button Group"
                className="btn-group"
              >
                <button type="button" className="btn btn-light custom-button">
                  <img
                    alt="Refresh"
                    src={refreshIcon}
                    className="img-fluid custom-margin"
                  />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="align-items-center">
          <Col>
            <div className="page-content p-3"></div>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};

export default Home;
