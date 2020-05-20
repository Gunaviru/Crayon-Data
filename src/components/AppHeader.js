import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import LineIcon from "react-lineicons";
import logo from "../assets/images/logo/logo.svg";
import avatar from "../assets/images/others/avatar.svg";

const Styles = styled.header`
  .navbar {
    background-color: #fff;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #4a5c7b;

    &:hover {
      color: #4a5c7b;
    }
  }
`;

const AppHeader = () => {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img alt="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17.1765H8.05882C8.05882 18.2486 8.92792 19.1176 10 19.1176C11.0721 19.1176 11.9412 18.2486 11.9412 17.1765H13C13 18.8333 11.6569 20.1765 10 20.1765C8.34315 20.1765 7 18.8333 7 17.1765ZM19 15.5876V15.9418C19 16.626 18.4472 17.1765 17.7642 17.1765H2.23578C1.55317 17.1765 1 16.624 1 15.9418V15.5876C1 14.3814 1.93317 13.3926 3.11765 13.301V8.88209C3.11765 5.08021 6.19849 2 10 2C13.8015 2 16.8824 5.08095 16.8824 8.88209V13.301C18.0687 13.3923 19 14.3802 19 15.5876ZM16.7026 14.3529C16.2172 14.3529 15.8235 13.9563 15.8235 13.4731V8.88209C15.8235 5.66572 13.2167 3.05882 10 3.05882C6.78321 3.05882 4.17647 5.66503 4.17647 8.88209V13.4731C4.17647 13.9585 3.78081 14.3529 3.29737 14.3529C2.61326 14.3529 2.05882 14.9063 2.05882 15.5876V15.9418C2.05882 16.0389 2.13764 16.1176 2.23578 16.1176H17.7642C17.8634 16.1176 17.9412 16.0402 17.9412 15.9418V15.5876C17.9412 14.9048 17.3887 14.3529 16.7026 14.3529Z"
                    fill="#4A5C7B"
                    stroke="#4A5C7B"
                    strokeWidth="0.1"
                  />
                  <circle cx="16" cy="4" r="4" fill="#EC1B23" />
                </svg>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">
                <img
                  alt="User"
                  src={avatar}
                  className="img-fluid rounded-circle mr-2"
                />
                <span className="align-middle">Aung Ko Win</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default AppHeader;
