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

const moveInBottom = keyframes`
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0);
    }
`;

const Styled = styled.div`
  height: 100vh;
  width: 20rem;
  background-color: ${white[100]};
  position: absolute;
  bottom: 0;
  right: 0;
  animation: ${moveInLeft} 0.5s;
  padding: 2rem;
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
    padding: 1rem 0;
  }

  h3 {
    padding-top: 3.5rem;
    font-size: ${typeScale.header2};

    @media only screen and (min-width: 600px) {
      font-size: ${typeScale.bodyText3};
    }
  }

  p {
    font-size: ${typeScale.header3};
    line-height: 3rem;

    @media only screen and (min-width: 600px) {
      font-size: ${typeScale.bodyText3};
      line-height: 2rem;
    }
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
    animation: ${moveInBottom} 0.5s;
    height: 75vh;
  }
`;

export default Styled;
