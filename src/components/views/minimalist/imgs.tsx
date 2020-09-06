import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Hstack, Vstack, P } from "../../";
import { Wallet, Bell, Camera, Cloud } from "./icons";

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
  <Wrapper {...motions(delay + 0.2)}>
    <Vstack space={3}>
      <P direction="center">Hover on the icons</P>
      <Vstack space={2}>
        <Hstack alignItems="center" space={4} justifyContent="center">
          <IconHolder>
            <Bell />
          </IconHolder>
          <IconHolder>
            <Camera />
          </IconHolder>
        </Hstack>
        <Hstack alignItems="center" space={4} justifyContent="center">
          <IconHolder>
            <Wallet />
          </IconHolder>
          <IconHolder>
            <Cloud />
          </IconHolder>
        </Hstack>
      </Vstack>
    </Vstack>
  </Wrapper>
);
const Wrapper = styled(motion.div)`
  margin: 0 auto !important;
  text-align: center;
  width: 100%;
  height: 500px;
  max-width: 517px;
  padding-bottom: 40px;
  min-width: 400px;
  z-index: 99;
`;
const IconHolder = styled.div`
  width: 130px;
  height: 130px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 40px rgba(1, 5, 10, 0.57);
`;
export default Imgs;
