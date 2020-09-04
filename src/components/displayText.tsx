import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const DisplayText = ({ ...rest }) => {
  return (
    <Playgroud {...rest}>
      <Display
        initial={{ x: "-120%", opacity: 0 }}
        animate={{ x: 0, opacity: 0.17 }}
        transition={{
          duration: 2.6,
          stiffness: 10,
          ease: "easeOut"
        }}
      >
        Frontend developer
      </Display>
    </Playgroud>
  );
};
const Playgroud = styled.div`
  position: absolute;
  right: 0;
`;
const Display = styled(motion.h1)`
  color: #282a36;
  text-align: right;
  font-size: 7rem;
  white-space: nowrap;
  font-weight: 900;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #fff;
`;
export default DisplayText;
