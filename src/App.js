import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import "./App.css";
import Toggle from "./Toggle";

const App = () => {
  return (
    <Container>
      <header className="App-header">
        <p>Toggling a simple useSpring animation</p>
        <Toggle />
      </header>
    </Container>
  );
};

export default App;

const Container = styled(animated.div)`
  text-align: center;
`;
