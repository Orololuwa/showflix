import React from "react";
import Styled from "./style";
import Backdrop from "../../components/Backdrop";
import MovieCard from "../../components/MovieCard";
import { useParams, useHistory } from "react-router";
import axios from "axios";
import Loading from "../../components/Loading";
import Button from "../../components/Button";
import { IoArrowBack } from "react-icons/io5";
import { Transition } from "react-transition-group";

const apikey = process.env.REACT_APP_API_KEY;

const Aside = (props) => {
  const { id } = useParams();
  const history = useHistory();

  const [movie, setMovie] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [show, setShow] = React.useState(false);

  //close modal handler
  const closeModalHandler = () => {
    //setMovie(null);
    setShow(false);
    setTimeout(() => {
      history.goBack();
    }, 501);
  };

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
        setShow(true);
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
      <Transition in={show} timeout={500} mountOnEnter unmountOnExit>
        {(state) => {
          return (
            <div>
              <Backdrop onConfirm={closeModalHandler} />
              <Styled anim={{ state: state }}>
                <div onClick={closeModalHandler} className="back-arrow">
                  <IoArrowBack />
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
            </div>
          );
        }}
      </Transition>
    </>
  );
};

export default Aside;
