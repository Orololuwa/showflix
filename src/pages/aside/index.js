import React from "react";
import Styled from "./style";
import Backdrop from "../../components/Backdrop";
import MovieCard from "../../components/MovieCard";
import { useParams, useHistory } from "react-router";
import axios from "axios";
import Loading from "../../components/Loading";
import Button from "../../components/Button";

const apikey = process.env.REACT_APP_API_KEY;

const Aside = (props) => {
  const { id } = useParams();
  const history = useHistory();

  const [movie, setMovie] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  //close modal handler
  const closeModalHandler = () => {
    setMovie(null);
    history.goBack();
  };

  React.useEffect(() => {
    setLoading(true);
    axios
      .post(`http://www.omdbapi.com/`, null, {
        params: {
          i: id,
          apikey: apikey
        }
      })
      .then((res) => {
        setMovie(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        history.goBack();
      });
  }, []);

  return (
    <>
      {loading && <Loading />}
      {movie && (
        <Backdrop>
          <Styled>
            <div onClick={closeModalHandler} className="back-arrow">
              &larr;
            </div>
            <div className="movie">
              <MovieCard poster={movie.Poster} alt={movie.Title} />
            </div>

            <h3>{movie.Title}</h3>
            <p>{movie.Plot}</p>
            <div className="button">
              <Button className="btn">Watch</Button>
            </div>
          </Styled>
        </Backdrop>
      )}
    </>
  );
};

export default Aside;
