import styled from "styled-components";
import { grey } from "../../theme";

const StyledSideBar = styled.nav`
  display: none;
  height: 100vh;
  width: 15rem;
  border-right: 1px solid ${grey[100]};

  .logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
      margin: 2.5rem;
    }
  }

  @media only screen and (min-width: 600px) {
    display: inline-block;
  }
`;

export default StyledSideBar;
