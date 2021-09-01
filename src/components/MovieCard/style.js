import styled from "styled-components";
import { grey, black, typeScale } from "../../theme";

const Styled = styled.div`
  width: 30rem;
  height: 45rem;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .card-button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10%;
    background-color: ${grey[100]};
    color: ${black[100]};
    border-radius: 5rem;
    padding: 1.5rem 4.5rem;
    font-weight: 600;
    font-size: ${typeScale.header3};
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      background-color: ${black[100]};
      color: ${grey[100]};

      border: 1px solid ${grey[100]};
    }

    @media only screen and (min-width: 600px) {
      padding: 0.5rem 2.5rem;
      font-size: ${typeScale.bodyText3};
    }
  }

  @media only screen and (min-width: 600px) {
    width: 15rem;
    height: 22.5rem;
  }
`;

export default Styled;
