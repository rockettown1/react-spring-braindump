import React from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";
import styled from "styled-components";
import Routes from "./Routes";

//NOTE animated is a wrapper for the components we want to animate.

const App = () => {
  //simple useSpring needs starting and ending values
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });
  return (
    <Container style={fade}>
      <Routes />
      <header className="App-header"></header>
    </Container>
  );
};

export default App;

const Container = styled(animated.div)`
  text-align: center;
`;
