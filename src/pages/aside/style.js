import styled, { keyframes } from "styled-components";
import { white } from "../../theme";

const moveInLeft = keyframes`
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
`;

const moveOutLeft = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(100%);
    }
`;

const Styled = styled.div`
  display: none;
  height: 100vh;
  width: 20rem;
  background-color: ${white[100]};
  position: fixed;
  top: 0;
  right: 0;
  animation: ${({ state }) =>
      state === "entering"
        ? moveInLeft
        : state === "exiting"
        ? moveOutLeft
        : null}
    0.5s;

  @media only screen and (min-width: 600px) {
    display: inline-block;
  }
`;

export default Styled;
