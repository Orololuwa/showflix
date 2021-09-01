import Button from "../Button";
import Styled from "./style";

const MovieCard = () => {
  return (
    <Styled>
      <img src="lui.jpg" alt="movie" />
      <Button className="card-button">View</Button>
    </Styled>
  );
};

export default MovieCard;
