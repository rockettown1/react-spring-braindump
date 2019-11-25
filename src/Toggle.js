import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  // no from property, just a to property which uses state to determine its value.
  //dont have to specifically set it's from property, it will just use it's current value.
  // useSpring can animated nearly anything

  // const fade = useSpring({
  //   // opacity: toggle ? 1 : 0,
  //   fontSize: toggle ? "20px" : "30px",
  //   color: toggle ? "#000000" : "#b8bece",
  //   transform: toggle ? "translate3d(0,0,0)" : "translate3d(100px,0,0)"
  // });

  //can use object desstructuring to pull out values from the fade object and use them in the style object singularly (avoids having to use fade.color for example) but also gives us use of a property called interpolate.

  //remember that each of the properties below (color, fontSize etc) are objects themselves with a ton of stuff. Interpolate is a function on each of these objects. We can use it to get values - see the y example below

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
