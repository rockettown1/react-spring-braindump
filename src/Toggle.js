import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  const { color, fontSize, y } = useSpring({
    // opacity: toggle ? 1 : 0,
    // fontSize: toggle ? "20px" : "30px",
    color: toggle ? "#000000" : "#b8bece",
    // transform: toggle ? "translate3d(0,0,0)" : "translate3d(100px,0,0)",
    y: toggle ? 0 : -50
  });

  return (
    <Container>
      <animated.h1
        style={{
          color,
          transform: y.interpolate(y => `translate3d(0,${y}px,0)`)
        }}
      >
        {" "}
        Hello{" "}
      </animated.h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </Container>
  );
};

export default Toggle;

const Container = styled.div``;
