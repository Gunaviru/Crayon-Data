import React, { useState, useEffect } from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import dashboardIcon from "../assets/images/icons/dashboard.svg";
import documentsIcon from "../assets/images/icons/documents.svg";
import historyIcon from "../assets/images/icons/history.svg";
import projectsIcon from "../assets/images/icons/projects.svg";
import reportsIcon from "../assets/images/icons/reports.svg";
import servicesIcon from "../assets/images/icons/services.svg";
import settingsIcon from "../assets/images/icons/settings.svg";
import supportIcon from "../assets/images/icons/support.svg";
import transferIcon from "../assets/images/icons/transfer.svg";
import usersIcon from "../assets/images/icons/users.svg";
import menuExpandIcon from "../assets/images/icons/menu-expand.svg";
import menuPinnedIcon from "../assets/images/icons/menu-pinned.svg";

const Styles = styled.section`
  min-height: calc(100vh - 62px);
  background: #f5f6fa;

  .sidebar-wrapper {
    position: absolute;
    min-height: calc(100vh - 62px);
    background: #ffffff;
    font-size: 15px;
    color: #4a5c7b !important;
    .active {
      border-right: 2px solid #ec1b23;
      .active-text {
        font-size: 15px;
        line-height: 18px;
        color: #ec1b23;
      }
    }
    .menu-expansion {
      position: absolute;
      width: 100%;
      bottom: 10px;
    }
  }
  .sidebar-wrapper-expanded {
    width: 251px;
  }
  .sidebar-wrapper-pinned {
    width: 62px;
  }
  .content-wrapper {
    margin-left: ${(props) =>
      props.menuOpened || props.menuFixed ? "251px" : "62px"};
    max-width: ${(props) =>
      props.menuOpened || props.menuFixed
        ? "calc(100vw - 251px)"
        : "calc(100vw - 62px)"};
    min-height: calc(100vh - 62px);
    border: 1px solid #ebeef1;
  }
`;

const Layout = (props) => {
  // methods for initializing the state
  const [menuOpened, setMenuOpened] = useState(false);
  const [menuFixed, setMenuFixed] = useState(false);

  // methods for handling the menu display
  const handleMenuDisplay = () => {
    setMenuOpened(!menuOpened);
  };

  // methods for handling fixed menu position
  const handleFixedMenuDisplay = () => {
    setMenuFixed(!menuFixed);
  };

  return (
    <Styles menuOpened={menuOpened} menuFixed={menuFixed}>
      <nav
        className={
          menuOpened || menuFixed
            ? "sidebar-wrapper sidebar-wrapper-expanded py-3"
            : "sidebar-wrapper sidebar-wrapper-pinned py-3"
        }
      >
        <Container
          onMouseEnter={handleMenuDisplay}
          onMouseLeave={handleMenuDisplay}
        >
          <Row>
            <Col className="active">
              {menuOpened || menuFixed ? (
                <p className="text-left py-2 m-0">
                  <img
                    alt="dashboard"
                    src={dashboardIcon}
                    className="align-middle mr-4"
                  />
                  <span className="active-text">Dashboard</span>
                </p>
              ) : (
                <p className="text-center py-2 m-0">
                  <img
                    alt="dashboard"
                    src={dashboardIcon}
                    className="align-middle"
                  />
                </p>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              {menuOpened || menuFixed ? (
                <p className="text-left py-2 m-0">
                  <img
                    alt="Documents"
                    src={documentsIcon}
                    className="align-middle mr-4"
                  />
                  <span>Documents</span>
                </p>
              ) : (
                <p className="text-center py-2 m-0">
                  <img
                    alt="Documents"
                    src={documentsIcon}
                    className="align-middle"
                  />
                </p>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              {menuOpened || menuFixed ? (
                <p className="text-left py-2 m-0">
                  <img
                    alt="History"
                    src={historyIcon}
                    className="align-middle mr-4"
                  />
                  <span>History</span>
                </p>
              ) : (
                <p className="text-center py-2 m-0">
                  <img
                    alt="History"
                    src={historyIcon}
                    className="align-middle"
                  />
                </p>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              {menuOpened || menuFixed ? (
                <p className="text-left py-2 m-0">
                  <img
                    alt="Transfer"
                    src={transferIcon}
                    className="align-middle mr-4"
                  />
                  <span>Transfer</span>
                </p>
              ) : (
                <p className="text-center py-2 m-0">
                  <img
                    alt="Transfer"
                    src={transferIcon}
                    className="align-middle"
                  />
                </p>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              {menuOpened || menuFixed ? (
                <p className="text-left py-2 m-0">
                  <img
                    alt="Services"
                    src={servicesIcon}
                    className="align-middle mr-4"
                  />
                  <span>Services</span>
                </p>
              ) : (
                <p className="text-center py-2 m-0">
                  <img
                    alt="Services"
                    src={servicesIcon}
                    className="align-middle"
                  />
                </p>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              {menuOpened || menuFixed ? (
                <p className="text-left py-2 m-0">
                  <img
                    alt="Projects"
                    src={projectsIcon}
                    className="align-middle mr-4"
                  />
                  <span>Projects</span>
                </p>
              ) : (
                <p className="text-center py-2 m-0">
                  <img
                    alt="Projects"
                    src={projectsIcon}
                    className="align-middle"
                  />
                </p>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              {menuOpened || menuFixed ? (
                <p className="text-left py-2 m-0">
                  <img
                    alt="Settings"
                    src={settingsIcon}
                    className="align-middle mr-4"
                  />
                  <span>Settings</span>
                </p>
              ) : (
                <p className="text-center py-2 m-0">
                  <img
                    alt="Settings"
                    src={settingsIcon}
                    className="align-middle"
                  />
                </p>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              {menuOpened || menuFixed ? (
                <p className="text-left py-2 m-0">
                  <img
                    alt="Support"
                    src={supportIcon}
                    className="align-middle mr-4"
                  />
                  <span>Support</span>
                </p>
              ) : (
                <p className="text-center py-2 m-0">
                  <img
                    alt="Support"
                    src={supportIcon}
                    className="align-middle"
                  />
                </p>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              {menuOpened || menuFixed ? (
                <p className="text-left py-2 m-0">
                  <img
                    alt="Report"
                    src={reportsIcon}
                    className="align-middle mr-4"
                  />
                  <span>Report</span>
                </p>
              ) : (
                <p className="text-center py-2 m-0">
                  <img
                    alt="Report"
                    src={reportsIcon}
                    className="align-middle"
                  />
                </p>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              {menuOpened || menuFixed ? (
                <p className="text-left py-2 m-0">
                  <img
                    alt="Users"
                    src={usersIcon}
                    className="align-middle mr-4"
                  />
                  <span>Users</span>
                </p>
              ) : (
                <p className="text-center py-2 m-0">
                  <img alt="Users" src={usersIcon} className="align-middle" />
                </p>
              )}
            </Col>
          </Row>
        </Container>
        <Container className="menu-expansion">
          <Row>
            <Col>
              {menuOpened || menuFixed ? (
                <div
                  role="toolbar"
                  aria-label="Menu Toolbar"
                  className="btn-toolbar"
                >
                  <div
                    role="group"
                    aria-label="Menu Button Group"
                    className="btn-group btn-block"
                  >
                    <button
                      type="button"
                      className="btn btn-transparent text-left px-0"
                      onClick={() => handleFixedMenuDisplay()}
                    >
                      <img
                        alt="Minimize"
                        src={menuPinnedIcon}
                        className="align-middle mr-4"
                      />
                      <span>Minimize</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  role="toolbar"
                  aria-label="Menu Toolbar"
                  className="btn-toolbar"
                >
                  <div
                    role="group"
                    aria-label="Menu Button Group"
                    className="btn-group btn-block"
                  >
                    <button
                      type="button"
                      className="btn btn-transparent text-center px-0"
                      onClick={() => handleFixedMenuDisplay()}
                    >
                      <img
                        alt="Minimize"
                        src={menuExpandIcon}
                        className="align-middle"
                      />
                    </button>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </nav>
      <div className="content-wrapper">
        <Container fluid>
          <Row>
            <Col>{props.children}</Col>
          </Row>
        </Container>
      </div>
    </Styles>
  );
};

export default Layout;
