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
          style={{ position: "absolute", scale: 0.6 }}
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
