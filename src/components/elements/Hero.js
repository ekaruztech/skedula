import React from "react";
import styled from "styled-components";
import { ReactComponent as Hero } from "../assets/images/HeroImage.svg";

const Container = styled.div`
  background-color: #fff;
  padding: 0;
  /* overflow: hidden; */
  svg {
    height: 665px;
    width: 605px;
    position: absolute;
    top: 25px;
    right: -2px;
  }
`;

export default function index() {
  return (
    <Container>
      <Hero />
    </Container>
  );
}
