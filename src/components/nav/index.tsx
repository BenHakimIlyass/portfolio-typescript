import React from "react";
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

import { AnimatedH4, AnimatedP, Hstack, Container } from "../";
import AnimatedLogo from "./animated-logo";
import { useTimeout } from "../../hooks";

const Nav = () => {
  const animate = useTimeout(2000);

  return (
    <AnimateSharedLayout>
      {animate ? (
        <Wrapper animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
          <Container>
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
                  transition={{ delay: 1 }}
                  style={{ fontSize: 16, width: 200 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Frontend developer / UI UX designer
                </AnimatedP>
              )}
            </Hstack>
          </Container>
        </Wrapper>
      ) : (
        <AnimatePresence>
          <AnimatedLogo />
        </AnimatePresence>
      )}
    </AnimateSharedLayout>
  );
};
const Wrapper = styled(motion.div)`
  height: 100px;
  padding-top: 20px;
  background-image: linear-gradient(
    180deg,
    #0a0a0c 0%,
    rgba(10, 10, 12, 0.282717) 59.38%,
    rgba(10, 10, 12, 0.183781) 68.75%,
    rgba(10, 10, 12, 0.107444) 79.17%,
    rgba(10, 10, 12, 0.03125) 92.71%,
    rgba(10, 10, 12, 0.0133929) 95.31%,
    rgba(10, 10, 12, 0) 100%
  );
`;
export default Nav;
