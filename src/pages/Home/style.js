import styled from "styled-components";
import { typeScale } from "../../theme";
import { centerRow } from "../../styles/utilities";

const StyledHome = styled.main`
  padding: 5rem 2.5rem;

  .logo {
    ${centerRow}
    padding-bottom: 3.5rem;

    @media only screen and (min-width: 600px) {
      display: none;
    }
  }

  .title {
    padding: 1.5rem 0;

    @media only screen and (min-width: 600px) {
      padding: 0 0 1.5rem 0;
    }
  }

  .search {
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    position: relative;

    &-icon {
      width: 1.5rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 1.5rem;

      @media only screen and (max-width: 600px) {
        display: none;
      }
    }

    &-input {
      width: 23rem;
      font-size: ${typeScale.bodyText1};

      @media only screen and (min-width: 600px) {
        width: 70%;
        padding: 1.5rem 1rem 1.5rem 4.5rem;
        font-size: ${typeScale.bodyText2};
      }
    }

    &-button {
      &--icon {
        width: 2rem;

        @media only screen and (min-width: 600px) {
          display: none;
        }
      }

      &--text {
        font-size: ${typeScale.bodyText1};

        @media only screen and (max-width: 600px) {
          display: none;
        }
      }

      @media only screen and (min-width: 600px) {
        border-radius: 5rem;
        padding: 1.5rem 5rem;
      }
    }
  }
`;

export default StyledHome;
