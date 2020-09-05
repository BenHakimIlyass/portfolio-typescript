import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import CodeImg from "./codeImg";
import HooksImg from "./hooksImg";

const motions = (delay: number) => ({
  animate: { y: 0, opacity: 1 },
  initial: { y: 100, opacity: 0 },
  transition: {
    delay: delay,
    ease: "easeOut",
    type: "spring"
  }
});
const Imgs = ({ delay }: { delay: number }) => (
  <Wrapper>
    <motion.div {...motions(delay + 0.2)}>
      <HooksImg />
    </motion.div>
    <motion.div {...motions(delay + 0.4)}>
      <CodeImg />
    </motion.div>
  </Wrapper>
);
const Wrapper = styled.div`
  width: 90%;
  max-width: 517px;
  height: 500px;
  position: relative;
  margin: 0 auto;
  z-index: 99;
`;
export default Imgs;
