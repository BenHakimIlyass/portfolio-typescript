import * as React from "react";
import { FrontendDev, Nav } from "./components";
import { GlobalStyle } from "./globalStyles";
import { motion } from "framer-motion";

const App = () => {
  return (
    <motion.div
      initial={{ backgroundColor: "#000" }}
      animate={{ backgroundColor: "#282A36" }}
    >
      <GlobalStyle />

      <Nav />
      <FrontendDev />
    </motion.div>
  );
};

export default App;
