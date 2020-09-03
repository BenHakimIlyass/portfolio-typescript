import * as React from "react";
import { AnimatedH1 } from "../";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function AnimatedLogo() {
  return (
    <div style={{ width: "100%", marginTop: 200 }}>
      <motion.div
        style={{ left: "calc(50% - 100px)", position: "absolute" }}
        transition={{ delay: 1, type: "spring" }}
        initial={{ x: 5 }}
        animate={{ x: 0 }}
      >
        <AnimatedH1
          transition={{ type: "tween" }}
          initial={{ clipPath: "inset(50% 0 50% 0)" }}
          animate={{ clipPath: "inset(0% 0 50% 0)" }}
        >
          Ilyass
        </AnimatedH1>
      </motion.div>
      <motion.div
        style={{ left: "calc(50% - 100px)", position: "absolute" }}
        transition={{ delay: 1, type: "spring" }}
        initial={{ x: -5 }}
        animate={{ x: 0 }}
      >
        <AnimatedH1
          transition={{ type: "tween" }}
          initial={{ clipPath: "inset(50% 0 50% 0)" }}
          animate={{ clipPath: "inset(50% 0 0% 0)" }}
        >
          Ilyass
        </AnimatedH1>
      </motion.div>
    </div>
  );
}
