import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  DisplayText,
  AnimatedH3,
  AnimatedP,
  P,
  H4,
  Vstack,
  Hstack,
  Container
} from "../../";
import Img from "./imgs";
import { breakpoints } from "../../../utils";

const Minimalist = () => {
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
                  animate={{
                    opacity: 1
                  }}
                  initial={{
                    opacity: 0
                  }}
                >
                  I design minimalist digital experiences, for legit online
                  projects.
                </AnimatedH3>
                <AnimatedP style={{ zIndex: 1 }}>
                  By respecting the UI/UX rules, everyone can make his own
                  perfect product.
                </AnimatedP>
              </Vstack>
            </TextBoundary>
            {/* hero img */}
            <Img delay={1} />
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
        style={{ top: 140, left: "20%", zIndex: 0 }}
        title="Minimalist design system"
      />
    </Wrapper>
  );
};
const Devider = styled.div`
  width: 20%;
  height: 1px;
  background-color: #fff;
`;
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

export default Minimalist;
