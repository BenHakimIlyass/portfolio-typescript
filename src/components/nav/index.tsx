import React from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import styled from "styled-components";

import { AnimatedH4, AnimatedP, Hstack, Container } from "../";
import AnimatedLogo from "./animated-logo";
import { useTimeout } from "../../hooks";

const Nav = () => {
  const animate = useTimeout(2000);

  return (
    <AnimateSharedLayout>
      {animate ? (
        <Container>
          <Wrapper style={{ position: "relative" }}>
            <Hstack alignItems="center" justifyContent="space-between">
              <AnimatedH4
                layoutId="logo"
                transition={{
                  duration: 2,
                  ease: [0.6, 0, 0, 1]
                }}
              >
                Ilyass
              </AnimatedH4>
              {animate && (
                <AnimatedP
                  direction="right"
                  style={{ width: 300 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Frontend developer / UI UX designer
                </AnimatedP>
              )}
            </Hstack>
          </Wrapper>
        </Container>
      ) : (
        <AnimatePresence>
          <AnimatedLogo />
        </AnimatePresence>
      )}
    </AnimateSharedLayout>
  );
};
const Wrapper = styled.div`
  height: 100px;
  padding-top: 20px;
  background-image: linear-gradient(
    180deg,
    #282a36 0%,
    rgba(40, 42, 54, 0.833333) 40.62%,
    rgba(40, 42, 54, 0) 100%
  );
`;
export default Nav;
