import styled from "styled-components";
import { grey, blue, black, typeScale } from "../../theme";
const Styled = styled.div`
  display: flex;
  align-items: center;
  color: ${grey[100]};
  position: relative;
  transition: all 0.8s;
  width: 100%;
  padding: 0 1rem;
  margin: 1rem 0;

  .icon {
    width: 1.75rem;
    height: 1.75rem;
    padding: 7.5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;

    img {
      width: 100%;
      fill: blue;
    }
  }

  span {
    font-weight: 600;
    font-size: ${typeScale.bodyText3};
    padding: 0 0.5rem;
  }

  &:hover {
    cursor: pointer;
    transition: all 0.8s;

    .icon {
      background-color: ${blue[100]};

      img {
        width: 100%;
        fill: blue;
      }
    }

    span {
      font-weight: 600;
      color: ${black[100]};
    }

    &:hover::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 6.5px;
      border-radius: 10px;
      height: 80%;
      background-color: ${blue[100]};
    }
  }
`;

export default Styled;
