import styled, { keyframes } from "styled-components";
import { centerRow } from "../../styles/utilities";
import { typeScale, white } from "../../theme";

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
  height: 100vh;
  width: 20rem;
  background-color: ${white[100]};
  position: absolute;
  top: 0;
  right: 0;
  animation: ${moveInLeft} 0.5s;
  padding: 1rem;
  z-index: 9000000;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .back-arrow {
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
    cursor: pointer;
  }

  .movie {
    margin-bottom: 1.5rem;
    ${centerRow}
  }

  .button {
    ${centerRow}
  }

  h3,
  p {
    margin: 0.5rem 0;
  }

  .btn {
    border-radius: 5rem;
    font-size: ${typeScale.bodyText2};
    padding: 1rem 5rem;
    margin: 1rem 0;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export default Styled;
