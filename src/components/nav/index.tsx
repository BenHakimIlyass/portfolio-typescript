import React from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import styled from "styled-components";

import { AnimatedH4 } from "../";
import AnimatedLogo from "./animated-logo";
import { useTimeout } from "../../hooks";

const Nav = () => {
  const animate = useTimeout(2000);

  return (
    <AnimateSharedLayout>
      {animate ? (
        <AnimatedH4
          layoutId="logo"
          transition={{
            duration: 2,
            ease: [0.6, 0, 0, 1]
          }}
          style={{ position: "absolute", margin: 20 }}
        >
          Ilyass
        </AnimatedH4>
      ) : (
        <AnimatePresence>
          <AnimatedLogo />
        </AnimatePresence>
      )}
    </AnimateSharedLayout>
  );
};

export default Nav;
