import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  // no from property, just a to property which uses state to determine its value.
  //dont have to specifically set it's from property, it will just use it's current value.
  const fade = useSpring({
    opacity: toggle ? 1 : 0
  });

  return (
    <Container>
      <animated.h1 style={fade}> Hello </animated.h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </Container>
  );
};

export default Toggle;

const Container = styled.div``;
