import styled from "styled-components";

const Styled = styled.div`
  width: 100%;
  display: flex;
  padding-left: 15rem;

  .theContent {
    flex-grow: 1;
  }

  @media only screen and (max-width: 600px) {
    padding-left: 0;
  }
`;

export default Styled;
