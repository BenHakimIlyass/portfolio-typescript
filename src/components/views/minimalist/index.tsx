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
import { breakpoints } from "../../../utils";

const Minimalist = () => {
  return (
    <Wrapper>
      <Container>
        <Cluster space={1} alignItems="center" justifyContent="space-between">
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
                I design minimalist digital experiences, for legit online
                projects.
              </AnimatedH3>
              <AnimatedP style={{ zIndex: 1 }}>
                By respecting the UI/UX rules, everyone can make his own perfect
                product.
              </AnimatedP>
            </Vstack>
          </div>

          <Img delay={1} />
        </Cluster>
      </Container>
      <DisplayText
        style={{ top: 140, left: "20%", zIndex: 0 }}
        title="Minimalist design system"
      />
    </Wrapper>
  );
};
const Cluster = styled(Hstack)`
  ${breakpoints({
    0: { flexWrap: "wrap" },
    920: { flexWrap: "nowrap" }
  })}
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 400px;
  height: fit-content;
  position: relative;
`;

export default Minimalist;
