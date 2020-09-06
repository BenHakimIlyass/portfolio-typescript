import * as React from "react";
import {
  FrontendDev,
  Minimalist,
  Contact,
  Nav,
  Vstack,
  SocialMedia
} from "./components";
import Headroom from "react-headroom";
import { useTimeout } from "./hooks";
import { GlobalStyle } from "./globalStyles";
import { motion } from "framer-motion";

const App = () => {
  const logoAnimationEnds = useTimeout(4000);
  return (
    <>
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
          <Vstack space={12}>
            <FrontendDev />
            <Minimalist />
            <Contact />
          </Vstack>
        </div>
      )}
    </>
  );
};

export default App;
