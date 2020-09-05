import React from "react";
import styled from "styled-components";
import DesignSystemImg from "./designSystem";
import { motion } from "framer-motion";
import { reponsiveStyleWrapper } from "../../../utils";

const motions = (delay: number) => ({
  animate: { y: 60, opacity: 1 },
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
      <DesignSystemImg />
    </motion.div>
  </Wrapper>
);
const Wrapper = styled.div`
  width: 90%;
  max-width: 517px;
  position: relative;
  margin: 0 auto;
  z-index: 99;
  ${reponsiveStyleWrapper({
    800: { height: 500 },
    600: { height: 300 }
  })}
`;
export default Imgs;
