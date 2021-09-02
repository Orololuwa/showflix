import styled from "styled-components";
import { grey, typeScale } from "../../theme";

const Styled = styled.main`
  padding: 5rem;

  .movie {
    display: flex;
    gap: 2rem;
    margin-bottom: 5rem;

    &-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .actions {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 3.5rem;

        span {
          display: flex;
          align-items: center;
          gap: 1rem;

          .icon {
            width: 1.5rem;
            height: 1.5rem;
            transform: translateY(-2px);
          }

          p {
          }
        }
      }

      .buttons {
        &-1 {
          border-radius: 5rem;
          font-size: ${typeScale.bodyText2};
          padding: 1rem 2.5rem;
          margin: 1rem 0;
          text-align: center;
          margin-right: 1.5rem;
        }

        &-2 {
          padding: 1rem;
          background-color: ${grey[200]};
          border-radius: 20px;

          &:hover {
            background-color: transparent;
          }
        }
      }
    }

    @media only screen and (max-width: 1088px) {
      flex-wrap: wrap;
    }
  }

  .similarMovies {
    h3 {
      margin: 1rem 0;
    }

    &-cards {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;

      .card {
        @media only screen and (min-width: 600px) {
          width: 12rem;
          height: 18rem;
        }
      }
    }
  }
`;

export default Styled;
