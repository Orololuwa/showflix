import Button from "../Button";
import Styled from "./style";

const MovieCard = (props) => {
  return (
    <Styled {...props}>
      <img src={props.poster} alt={props.alt} />
      {props.btn && <Button className="card-button">View</Button>}
    </Styled>
  );
};

export default MovieCard;
