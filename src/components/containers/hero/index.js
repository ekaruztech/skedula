import React from "react";
import styled from "styled-components";
import { ReactComponent as Hero } from "../../svg/Hero.svg";

const Container = styled.div`
  height: 100%;
  display: grid;
  background-color: #f9faff;
  align-items: center;
  justify-content: center;
  position: relative;
  svg {
    margin-top: 30px;
    display: grid;
    height: 740px;
    width: 640px;
    align-items: center;
    justify-content: center;
  }
`;

export default function index() {
  return (
    <Container>
      <Hero />
    </Container>
  );
}
