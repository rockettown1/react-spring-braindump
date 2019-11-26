import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";
import styled from "styled-components";
import Toggle from "./Toggle";
import Nav from "./Nav";

//NOTE animated is a wrapper for the components we want to animate.

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: navOpen ? "translate3d(0, 0, 0)" : "translate3d(100%, 0, 0)"
  });

  // from and to usually when you're animating components in after initial render.
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
      <button onClick={() => setNavOpen(!navOpen)}>Open Nav</button>
      <header className="App-header">
        <p>Menu Nav example</p>
        <Toggle />
        {/* nav animation passed as a prop */}
        <Nav style={navAnimation} />
      </header>
    </Container>
  );
};

export default App;

const Container = styled(animated.div)`
  text-align: center;
`;
