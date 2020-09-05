import * as React from "react";
import styled, { css } from "styled-components";

type Props = {
  space: number;
  style?: React.CSSProperties;
} & Pick<React.CSSProperties, "justifyContent" | "alignItems">;

const handleAlignement = ({
  justifyContent,
  alignItems,
  style
}: Partial<Props>): any =>
  css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent,
    alignItems,
    ...style
  });
const handleMargins = ({ space }: Partial<Props>): any => css`
  margin: calc(${space}rem / 2 * -1);
  & > * {
    margin: calc(${space}rem / 2);
  }
`;

const Cluster = styled.div<Props>`
  ${handleAlignement};
  ${handleMargins}
`;

export default Cluster;
