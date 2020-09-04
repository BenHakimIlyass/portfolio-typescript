import * as React from "react";
import { AnimatedH3 } from "../";
import { motion } from "framer-motion";

export default function AnimatedLogo() {
  return (
    <>
      <motion.div
        layoutId="logo"
        style={{
          left: "calc(50% - 100px)",
          top: "calc(50vh - 80px)",
          position: "absolute"
        }}
        transition={{ delay: 1, type: "spring" }}
        initial={{ x: 5 }}
        animate={{ x: 0 }}
      >
        <AnimatedH3
          transition={{ type: "tween", duration: 1 }}
          initial={{ clipPath: "inset(50% 0 50% 0)" }}
          animate={{ clipPath: "inset(0% 0 50% 0)" }}
        >
          Ilyass
        </AnimatedH3>
      </motion.div>
      <motion.div
        style={{
          left: "calc(50% - 100px)",
          position: "absolute",
          top: "calc(50vh - 80px)"
        }}
        transition={{ delay: 1, type: "spring" }}
        initial={{ x: -5 }}
        animate={{ x: 0 }}
      >
        <AnimatedH3
          transition={{ type: "tween", duration: 1 }}
          initial={{ clipPath: "inset(50% 0 50% 0)" }}
          animate={{ clipPath: "inset(50% 0 0% 0)" }}
        >
          Ilyass
        </AnimatedH3>
      </motion.div>
    </>
  );
}
