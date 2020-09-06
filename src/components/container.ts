import styled from "styled-components";
import { breakpoints } from "../utils";

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  ${breakpoints({
    0: { width: "90%", padding: "0 12px" },
    380: { padding: "0 8px" },
    520: { width: "calc(100% - 32px)" },
    790: { width: "90%" },
    920: { width: "80%" }
  })}
`;
export default Container;
