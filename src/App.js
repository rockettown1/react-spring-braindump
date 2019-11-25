import React from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";
import styled from "styled-components";

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
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Container>
  );
};

export default App;

const Container = styled(animated.div)`
  text-align: center;
`;
