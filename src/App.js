import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import NoMatch from "./NoMatch";
import Layout from "./components/Layout";
import AppHeader from "./components/AppHeader";

const Styles = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  font-family: "Roboto", sans-serif;
`;

function App() {
  return (
    <Styles>
      <AppHeader />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </Router>
      </Layout>
    </Styles>
  );
}

export default App;
