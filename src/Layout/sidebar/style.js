import styled from "styled-components";
import { grey } from "../../theme";
import { centerRow } from "../../styles/utilities";

const StyledSideBar = styled.nav`
  display: none;
  height: 100vh;
  width: 15rem;
  border-right: 1px solid ${grey[100]};
  position: fixed;
  top: 0;
  left: 0;

  .logo-wrapper {
    ${centerRow}

    .logo {
      margin: 2.5rem;
    }
  }

  @media only screen and (min-width: 600px) {
    display: inline-block;
  }
`;

export default StyledSideBar;
