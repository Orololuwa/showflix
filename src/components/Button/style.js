import styled from "styled-components";
import { blue, white } from "../../theme/colors";

const StyledButton = styled.button`
  padding: 2rem 2.5rem;
  background-color: ${blue[100]};
  color: ${white[100]};
  border: 1px solid transparent;
  border-radius: 1.5rem;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: ${white[100]};
    color: ${blue[100]};

    border: 1px solid ${blue[100]};
  }
`;

export default StyledButton;
