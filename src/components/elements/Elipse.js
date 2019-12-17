import React from "react";
import styled from "styled-components";
import { ReactComponent as Elipse } from "../assets/images/Ellipse_4.svg";

const Container = styled.div`
  overflow: hidden;
  svg {
    height: 700px;
    width: 800px;
    margin: 20px 0 0 -710px;
  }
`;

export default function index() {
  return (
    <Container>
      <Elipse />
    </Container>
  );
}
