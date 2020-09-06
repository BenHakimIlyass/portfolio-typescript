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
import Img from "./imgs";

const FrontendDev = () => {
  return (
    <Wrapper>
      <Container>
        <Vstack space={4}>
          <Cluster space={2} alignItems="center" justifyContent="space-between">
            {/* hero texts */}
            <TextBoundary>
              <Vstack space={2}>
                <AnimatedH3
                  style={{ zIndex: 1 }}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                >
                  I make clean code for legits online products.
                </AnimatedH3>
                <AnimatedP style={{ zIndex: 1 }}>
                  Im always working on my skill set, so I can be able to build
                  such a perfect interactive web applications, in which every
                  component serves a reason.
                </AnimatedP>
              </Vstack>
            </TextBoundary>
            {/* hero img */}

            {<Img delay={1} />}
          </Cluster>
          <Vstack space={2}>
            {/* testimonials */}
            <Devider />
            <Vstack space={1}>
              <H4 style={{ fontWeight: 700 }}>Experiences</H4>
              <P>
                First i started by writing/learning some javascript in React JS,
                there were lots of things that just took me quite awhile to
                figure out, such as state/props concept, one way data flow,
                managing global state, reusable conponents...
              </P>
              <P>
                But a 8-9 months later, i found myself falling in love with
                react hooks, redux, Next JS, styled-components, typescript,
                optimization concepts
              </P>
              <P>
                After that i joined my friends, on a real project{" "}
                <a href="gfree.co" target="_blanc" style={{ color: "white" }}>
                  Gluten free community
                </a>
                , and this was my first experience that gived me the opportunity
                to discover a lot of new concepts.
              </P>
            </Vstack>
          </Vstack>
        </Vstack>
      </Container>

      <DisplayText
        style={{ top: 140, left: "30%", zIndex: 0 }}
        title="Frontend developer"
      />
    </Wrapper>
  );
};
const TextBoundary = styled.div`
  ${breakpoints({
    920: { maxWidth: 500 }
  })}
`;
const Cluster = styled(Hstack)`
  ${breakpoints({
    0: { flexWrap: "wrap" },
    920: { flexWrap: "nowrap" }
  })}
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 400px;
  height: fit-content;
  position: relative;
`;
const Devider = styled.div`
  width: 20%;
  height: 1px;
  background-color: #fff;
`;
export default FrontendDev;
