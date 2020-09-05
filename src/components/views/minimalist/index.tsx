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

const Minimalist = () => {
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
                I design minimalist and natural digital experiences,
              </AnimatedH3>
              <AnimatedP style={{ zIndex: 1 }}>
                With manageable software work flow, a team will never get lost
                nor failed.
              </AnimatedP>
            </Vstack>
          </div>
          <div style={{ height: "auto" }}>
            <Img delay={1} />
          </div>
        </Hstack>
      </Container>
      <div style={{ display: "relative", width: "100%" }}>
        <DisplayText
          style={{ top: 140, left: "20%", zIndex: 0 }}
          title="Minimalist design system"
        />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
export default Minimalist;
