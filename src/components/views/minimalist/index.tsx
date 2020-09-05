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
        <Hstack
          space={1}
          alignItems="center"
          justifyContent="space-around"
          style={{ flexWrap: "nowrap" }}
        >
          <div style={{ maxWidth: 500, width: "100%" }}>
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
                I design minimalist digital experiences, for legit online
                projects.
              </AnimatedH3>
              <AnimatedP style={{ zIndex: 1 }}>
                By respecting the UI/UX rules, everyone can make his own perfect
                product.
              </AnimatedP>
            </Vstack>
          </div>
          <div>
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
  position: relative;
`;
export default Minimalist;
