import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

type Props = {
  isWhite?: boolean;
  delay?: number;
};

const DisplayText = ({ isWhite, delay, ...rest }: Props) => {
  return (
    <Playgroud {...rest}>
      <Display
        initial={{ x: "-100%", opacity: 1 }}
        animate={{ x: "50%", opacity: 0.4 }}
        transition={{
          delay: 4.6,
          type: "spring",
          stiffness: 10
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
