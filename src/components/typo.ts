import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { breakpoints } from "../utils";

const gradient = ({ gradient }: { gradient: string }) =>
  !!gradient &&
  css`
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(${gradient});
  `;
const alignement = css`
  text-align: ${({ direction }: { direction?: "center" | "right" }) =>
    direction ? direction : "left"};
  ${gradient}
`;
const Paragraph = css`
  color: #fff;
  font-size: 1.1rem;
  ${alignement}
  ${breakpoints({
    0: { fontSize: "0.8rem", lineHeight: "calc(14px + 14px * 0.4)" },
    520: { fontSize: "1.1rem", lineHeight: "calc(18px + 18px * 0.4)" }
  })}
`;
const Header = css`
  font-size: 3.4rem;
  font-weight: 700;
  color: #fff;
  line-height: 4rem;
  ${alignement}
`;
const Header3 = css`
  font-size: 36px;
  color: #fff;
  line-height: calc(36px + 36px * 0.4);
  ${alignement}
  ${breakpoints({
    0: { fontSize: "1.8rem", lineHeight: "calc(1.8rem + 1.8rem * 0.4)" },
    520: { fontSize: 36, lineHeight: "calc(36px + 36px * 0.4)" }
  })}
`;
const Header4 = css`
  font-size: 1.6rem;
  color: #fff;
  line-height: 2.2rem;
  ${alignement}
`;
export const P = styled.p`
  ${Paragraph}
`;
export const AnimatedP = styled(motion.p)`
  ${Paragraph}
`;
export const AnimatedH1 = styled(motion.h1)`
  ${Header}
`;
export const H1 = styled.h1`
  ${Header}
`;
export const AnimatedH3 = styled(motion.h3)`
  ${Header3}
`;
export const H3 = styled.h3`
  ${Header3}
`;
export const AnimatedH4 = styled(motion.h4)`
  ${Header4}
`;
export const H4 = styled.h4`
  ${Header4}
`;
