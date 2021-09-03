import React from "react";
import axios from "axios";
import Styled from "./style";
import { useParams, useHistory } from "react-router";
import Loading from "../../components/Loading";
import MovieCard from "../../components/MovieCard";
import { IoPlayOutline, IoStarOutline, IoTimeOutline } from "react-icons/io5";
import Button from "../../components/Button";
import Heart from "../../assets/Heart.svg";
import { useSelector } from "react-redux";

const apikey = process.env.REACT_APP_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const history = useHistory();
  const movies = useSelector((state) =>
    state.data.movies.filter((movie) => movie.imdbID !== id)
  );
  const [movie, setMovie] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    axios
      .post(`https://www.omdbapi.com/`, null, {
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
      });
  }, [id]);

  return (
    <>
      {loading && <Loading />}
      {movie && (
        <Styled>
          <div className="movie">
            <div className="movie-left">
              <MovieCard poster={movie.Poster} alt={movie.Title} />
            </div>
            <div className="movie-right">
              <span className="title">
                <h3>{movie.Title}</h3>
                <p>{movie.Plot}</p>
              </span>
              <div className="actions">
                <span>
                  <IoTimeOutline className="icon" />
                  <p>{movie.Released}</p>
                </span>
                <span>
                  <IoStarOutline className="icon" />
                  <p>{movie.imdbRating}</p>
                </span>
                <span>
                  <IoPlayOutline className="icon" />
                  <p>{movie.Runtime}</p>
                </span>
              </div>
              <div className="buttons">
                <Button className="buttons-1">Watch Now</Button>
                <Button className="buttons-2">
                  <img src={Heart} alt="heart icon" />
                </Button>
              </div>
            </div>
          </div>
          <div className="similarMovies">
            <h3>Similar Movies</h3>
            <div className="similarMovies-cards">
              {movies.slice(0, 3).map((movie, idx) => (
                <MovieCard
                  className="card"
                  poster={movie.Poster}
                  alt={movie.Title}
                  key={idx}
                  btn
                  btnClick={() => history.push(`/movie-${movie.imdbID}`)}
                />
              ))}
            </div>
          </div>
        </Styled>
      )}
    </>
  );
};

export default Movie;
