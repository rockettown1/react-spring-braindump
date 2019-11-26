import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  __RouterContext
} from "react-router-dom";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

//creating our own hook to access location property
const useRouter = () => {
  return useContext(__RouterContext);
};

const Routes = () => {
  return (
    <Router>
      <Container>
        <ul className="router-nav">
          <NavLink to="/">One</NavLink>
          <NavLink to="/two">Two</NavLink>
          <NavLink to="/three">Three</NavLink>
        </ul>

        <Main />
      </Container>
    </Router>
  );
};

const Main = () => {
  const { location } = useRouter();

  const transitions = useTransition(location, location => location.key, {
    from: { transform: "translate3d(100%,0.1%,0)", position: "absolute" },
    enter: { transform: "translate3d(0,0.1%,0)" },
    leave: { transform: "translate3d(0,100%,0)" }
  });

  return transitions.map(({ item, key, props }) => (
    <AnimatedContainer key={key} style={props}>
      <Switch location={item}>
        <Route exact path="/" component={One} />
        <Route exact path="/two" component={Two} />
        <Route exact path="/three" component={Three} />
      </Switch>
    </AnimatedContainer>
  ));
};

function NavLink(props) {
  const { location } = useRouter();
  return (
    <li>
      <Link {...props} location={location} />
    </li>
  );
}

const One = () => {
  return (
    <ContainerOne className="page-route">
      <h1>One</h1>
    </ContainerOne>
  );
};
const Two = () => {
  return (
    <ContainerTwo className="page-route two">
      <h1>Two</h1>
    </ContainerTwo>
  );
};
const Three = () => {
  return (
    <ContainerThree className="page-route three">
      <h1>Three</h1>
    </ContainerThree>
  );
};

export default Routes;

const ContainerOne = styled.div`
  background-color: salmon;
  width: 100vw;
  height: 500px;
`;
const ContainerTwo = styled.div`
  background-color: gainsboro;
  width: 100vw;

  height: 500px;
`;
const ContainerThree = styled.div`
  background-color: rebeccapurple;
  width: 100vw;
  height: 500px;
`;

const Container = styled.div`
  top: 20px;
`;

const AnimatedContainer = styled(animated.div)``;
