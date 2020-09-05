import * as React from "react";
import {
  FrontendDev,
  Minimalist,
  Nav,
  Vstack,
  Container,
  SocialMedia
} from "./components";
import Headroom from "react-headroom";
import { useTimeout } from "./hooks";
import { GlobalStyle } from "./globalStyles";
import { motion } from "framer-motion";

const App = () => {
  const logoAnimationEnds = useTimeout(4000);
  return (
    <motion.div
      initial={{ backgroundColor: "#000" }}
      animate={{ backgroundColor: "#282A36" }}
    >
      <GlobalStyle />
      <Headroom>
        <Nav />
      </Headroom>
      <SocialMedia />

      {logoAnimationEnds && (
        <div
          style={{
            transform: `translate3d(0,10vh,0)`
          }}
        >
          <Vstack space={4}>
            <FrontendDev />
            <Minimalist />
          </Vstack>
        </div>
      )}
    </motion.div>
  );
};

export default App;
