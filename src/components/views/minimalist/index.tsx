import React from "react";
import styled from "styled-components";
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
                  I design minimalist digital prototypes, for a clean UI UX
                  products.
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
            <Vstack space={1}>
              <H4 style={{ fontWeight: 700 }}>Experiences</H4>
              <P>
                In 2016 I was trying to learn image/video editing, and that was
                the first step of my design career.{" "}
              </P>
              <P>
                After a while, a friend of mine told me that Adobe XD and Figma
                are the best free tools for web design, and here my real web
                design journey has started.
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
