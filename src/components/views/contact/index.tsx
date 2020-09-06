import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  DisplayText,
  AnimatedH3,
  H4,
  P,
  AnimatedP,
  Vstack,
  Hstack,
  Container
} from "../../";
import { breakpoints } from "../../../utils";

const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <Vstack space={2}>
            <AnimatedH3
              direction="center"
              style={{ zIndex: 1 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              I make clean code for legits online products.
            </AnimatedH3>
            <AnimatedP direction="center">
              Im always working on my skill set, so I can be able to build such
              a perfect interactive web applications, in which every component
              serves a reason.
            </AnimatedP>
          </Vstack>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 400px;
  height: fit-content;
  position: relative;
`;

export default Contact;
