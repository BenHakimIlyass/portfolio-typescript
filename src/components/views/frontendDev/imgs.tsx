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
    <motion.div {...motions(delay + 0.2)} style={{ margin: "0 auto" }}>
      <HooksImg />
    </motion.div>
    <motion.div {...motions(delay + 0.4)}>
      <CodeImg />
    </motion.div>
  </Wrapper>
);
const Wrapper = styled.div`
  margin: 0 auto !important;
  text-align: center;
  width: 100%;
  max-width: 517px;
  min-width: 400px;
  z-index: 99;
`;
export default Imgs;
