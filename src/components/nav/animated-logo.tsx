import * as React from "react";
import { AnimatedH3 } from "../";
import { motion } from "framer-motion";

export default function AnimatedLogo() {
  return (
    <div>
      <motion.div
        layoutId="logo"
        style={{
          width: 100,
          left: "50%",
          marginLeft: -50,
          top: "calc(50vh - 40px)",
          position: "absolute"
        }}
        transition={{ delay: 1, type: "spring" }}
        initial={{ x: 8 }}
        animate={{ x: 0 }}
      >
        <AnimatedH3
          transition={{ type: "tween", duration: 1 }}
          initial={{
            clipPath: "inset(50% 0 50% 0)"
          }}
          animate={{
            clipPath: "inset(0% 0 50% 0)"
          }}
        >
          Ilyass
        </AnimatedH3>
      </motion.div>
      <motion.div
        style={{
          width: 100,
          left: "50%",
          marginLeft: -50,
          position: "absolute",
          top: "calc(50vh - 40.4px)"
        }}
        transition={{ delay: 1, type: "spring" }}
        initial={{ x: -8 }}
        animate={{ x: 0 }}
      >
        <AnimatedH3
          transition={{ type: "tween", duration: 1 }}
          initial={{
            clipPath: "inset(50% 0 50% 0)"
          }}
          animate={{
            clipPath: "inset(50% 0 0% 0)"
          }}
        >
          Ilyass
        </AnimatedH3>
      </motion.div>
    </div>
  );
}
