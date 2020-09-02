import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Vstack } from "./";
import { useTimeout } from "../hooks";

type Props = {
  isWhite?: boolean;
  delay?: number;
};
const motions = (delay: number, isWhite?: boolean) => ({
  transition: {
    delay: delay,
    duration: 6,
    ease: [0.2, 0.05, -0.01, 0.9]
  }
});

const DisplayText = ({ isWhite, delay, ...rest }: Props) => {
  // const mounted = useTimeout({ delay: 1000 });
  return (
    <Playgroud {...rest}>
      <Vstack space={1}>
        <Display
          initial={{ clipPath: "inset(0 0 0 0)" }}
          exit={{ clipPath: "inset(0 0 0 0)" }}
          animate={{
            clipPath: isWhite ? "inset(0 0 0 0)" : `inset(100% 0 0 0)`
          }}
          {...motions(delay || 0, isWhite)}
          isWhite={isWhite}
        >
          WELCOME TO MY PORTFOLIO
        </Display>
        <Display
          {...motions(delay ? 2 + delay : 2, isWhite)}
          initial={{ x: "-100%" }}
          exit={{ clipPath: "inset(0 0 0 0)" }}
          animate={{
            x: 0,
            clipPath: isWhite ? "inset(0 0% 0 0)" : `inset(0 100% 0 0)`
          }}
          isWhite={isWhite}
        >
          ILYASS BEN HAKIM
        </Display>
        <Display {...motions(delay ? 8 + delay : 8, isWhite)} isWhite={isWhite}>
          SOFTWARE ENGINEER
        </Display>
      </Vstack>
    </Playgroud>
  );
};
const Playgroud = styled.div`
  position: absolute;
  right: 0;
`;
const Display = styled(motion.h1)`
  color: ${({ isWhite }: Props) => (!!isWhite ? "#fff" : "#000")};
  text-align: right;
  font-size: 7rem;
  font-weight: 900;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #fff;
`;
export default DisplayText;
