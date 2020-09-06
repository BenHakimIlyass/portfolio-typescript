import styled, { css } from "styled-components";

type StackAPI = {
  space: number;
  top?: number;
};

const spaceGenerator = ({ space, top }: StackAPI) => css`
  display: flex;
  margin-top: ${top}rem;
  flex-direction: column;
  justify-content: flex-start;
  & > * + * {
    margin-top: ${space}rem !important;
  }
`;

const handleBreakpoints = ({ space, top }: StackAPI) => {
  if (typeof space === "object") {
    return css`
      ${Object.keys(space).map((objKey, _) => {
        //  Wrapp breakpoints
        return css`
          @media only screen and (min-width: ${[objKey]}px) {
            ${spaceGenerator({ space: space[objKey], top })}
          }
        `;
      })}
    `;
  }
  return spaceGenerator({ space: space, top });
};

const VStack = styled.div<StackAPI>`
  ${handleBreakpoints}
`;

export default VStack;
