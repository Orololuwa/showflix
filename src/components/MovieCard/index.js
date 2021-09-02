import Button from "../Button";
import Styled from "./style";

const MovieCard = (props) => {
  return (
    <Styled {...props}>
      <img src={props.poster} alt={props.alt} onClick={props.clicked} />
      {props.btn && (
        <Button onClick={props.btnClick} className="card-button">
          View
        </Button>
      )}
    </Styled>
  );
};

export default MovieCard;
