import React from "react";
import Sidenav from "./sideNav";
import { Container, Row, Col } from "reactstrap";

function Dashboard() {
  return (
    <Container className="themed-container" fluid={true}>
      <Row>
        <Sidenav />
      </Row>
    </Container>
  );
}

export default Dashboard;
