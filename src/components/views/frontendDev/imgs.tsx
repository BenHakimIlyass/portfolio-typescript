import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import CodeImg from "./codeImg";
import HooksImg from "./hooksImg";
import { useTimeout } from "../../../hooks";

const motions = (delay: number) => ({
  animate: { y: 0, opacity: 1 },
  initial: { y: 100, opacity: 0 },
  exit: { y: 100, opacity: 0 },
  transition: {
    delay: delay,
    ease: "easeOut",
    type: "spring"
  }
});
const Imgs = ({ delay }: { delay: number }) => {
  const sectionDidMount = useTimeout(100);
  return (
    <Wrapper>
      <motion.div {...motions(sectionDidMount ? 0.2 : delay + 0.2)}>
        <HooksImg />
      </motion.div>
      <motion.div {...motions(sectionDidMount ? 0.4 : delay + 0.4)}>
        <CodeImg />
      </motion.div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 0 auto !important;
  text-align: center;
  width: 100%;
  max-width: 517px;
  height: 500px;
  height: fit-content;
  min-width: 400px;
  min-height: 400px;
  z-index: 99 !important;
`;
export default Imgs;
