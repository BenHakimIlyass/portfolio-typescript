import styled from "styled-components";
import { reponsiveStyleWrapper } from "../utils";

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  padding: 0 8px;
  box-sizing: border-box;
  ${reponsiveStyleWrapper({
    400: { width: "90%" },
    520: { width: "calc(100% - 32px)" },
    790: { width: "90%" },
    920: { width: "80%" }
  })}
`;
export default Container;
