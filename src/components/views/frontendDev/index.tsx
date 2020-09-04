import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  DisplayText,
  AnimatedH3,
  AnimatedP,
  Vstack,
  Hstack,
  Container
} from "../../";
import Img from "./imgs";

const FrontendDev = () => {
  return (
    <Wrapper>
      <Container>
        <Hstack space={1} alignItems="center" justifyContent="space-around">
          <div style={{ maxWidth: 500 }}>
            <Vstack space={2}>
              <AnimatedH3
                style={{ zIndex: 1 }}
                animate={{
                  opacity: 1
                }}
                initial={{
                  opacity: 0
                }}
              >
                I make clean code for legits online products.
              </AnimatedH3>
              <AnimatedP style={{ zIndex: 1 }}>
                I build almost perfect interactive web applications, using
                React, Typescript, styled-components, framer-motion...
              </AnimatedP>
            </Vstack>
          </div>
          <div style={{ height: "auto" }}>
            <Img delay={1} />
          </div>
        </Hstack>
      </Container>
      <div style={{ display: "relative" }}>
        <DisplayText style={{ top: 140, left: 160, zIndex: 0 }} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
export default FrontendDev;
