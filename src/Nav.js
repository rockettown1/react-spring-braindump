import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";

const Nav = ({ style }) => {
  return (
    <Container style={style}>
      <a href="#">About</a>
      <a href="#">Tutorials</a>
      <a href="#">Projects</a>
      <a href="#">Blog</a>
    </Container>
  );
};

export default Nav;

const Container = styled(animated.div)`
  height: 100vh;
  width: 100vw;
  background-color: salmon;
  justify-content: center;
  position: fixed;
  display: flex;
  flex-direction: column;
  a: link {
    text-decoration: none;
  }
`;
