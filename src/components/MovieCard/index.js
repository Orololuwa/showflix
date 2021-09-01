import Button from "../Button";
import Styled from "./style";

const MovieCard = (props) => {
  return (
    <Styled>
      <img src={props.poster} alt={props.alt} />
      <Button className="card-button">View</Button>
    </Styled>
  );
};

export default MovieCard;
