import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #000,
  display: flex;
  align-items: center;
  flex-flow: row;

`;

function User(props) {
  return <div className="User">{props.children}</div>;
}

export default User;
