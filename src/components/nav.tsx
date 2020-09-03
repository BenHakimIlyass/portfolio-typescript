import React from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import styled from "styled-components";

import { AnimatedH3, Hstack, AnimatedLogo } from "./";
import { useTimeout } from "../hooks";

const Nav = () => {
  const animate = useTimeout(2000);

  return (
    <AnimateSharedLayout>
      {animate ? (
        <AnimatedH3
          layoutId="logo"
          animate
          transition={{ duration: 2, ease: [0.6, 0.05, -0.01, 0.9] }}
          style={{ position: "absolute", margin: 20 }}
        >
          Ilyass
        </AnimatedH3>
      ) : (
        <AnimatePresence>
          <AnimatedLogo />
        </AnimatePresence>
      )}
    </AnimateSharedLayout>
  );
};

export default Nav;
