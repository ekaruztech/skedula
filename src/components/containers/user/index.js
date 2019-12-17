import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

function User(props) {
  return <Container>{props.children}</Container>;
}

export default User;
