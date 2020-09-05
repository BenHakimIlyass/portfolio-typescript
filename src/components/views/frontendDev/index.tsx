import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  DisplayText,
  AnimatedH3,
  H4,
  P,
  AnimatedP,
  Vstack,
  Hstack,
  Container
} from "../../";
import { reponsiveStyleWrapper } from "../../../utils";
import Img from "./imgs";

const FrontendDev = () => {
  return (
    <Wrapper>
      <Container>
        <Vstack space={3}>
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
                  I make clean code for legits online products.
                </AnimatedH3>
                <AnimatedP style={{ zIndex: 1 }}>
                  I build almost perfect interactive web applications, in which
                  every node serves a reason.
                </AnimatedP>
              </Vstack>
            </div>
            <Img delay={1} />
          </Cluster>
          <Vstack space={1}>
            <Devider />
            <H4 style={{ fontWeight: 500 }}>Projects i've worked on</H4>
            <P>Projects i've worked on</P>
          </Vstack>
        </Vstack>
      </Container>

      <DisplayText
        style={{ top: 140, left: "30%", zIndex: 0 }}
        title="Frontend developer"
      />
    </Wrapper>
  );
};
const Cluster = styled(Hstack)`
  ${reponsiveStyleWrapper({
    0: { flexWrap: "wrap" },
    900: { flexWrap: "nowrap" }
  })}
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
const Devider = styled.div`
  width: 20%;
  height: 1px;
  background-color: #fff;
`;
export default FrontendDev;
