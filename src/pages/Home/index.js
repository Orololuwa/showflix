import React from "react";
import StyledHome from "./style";
import Button from "../../components/Button";
import Search from "../../assets/Search.svg";
import SearchBlack from "../../assets/Search_black.svg";
import Logo from "../../assets/Logo.svg";
import MovieCard from "../../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/data/data-actions";
import { dataActions } from "../../store/data/data";
import Loading from "../../components/Loading";
import ErrorView from "../../components/Error";
import Aside from "../aside";

const Home = (props) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.data.movies);
  const error = useSelector((state) => state.data.error);
  const [loading, setLoading] = React.useState(false);

  const [asideShow, setAsideShow] = React.useState(false);

  //search values from input
  const [searchWord, setSearchWords] = React.useState("");

  const onSearchChangedHandler = (event) => {
    const val = event.target.value;
    setSearchWords(val);
  };

  const onSearchSubmitHandler = (event) => {
    event.preventDefault();
    if (!searchWord) {
      return;
    }
    setLoading(true);
    dispatch(fetchMovies(searchWord)).then((res) => {
      setLoading(false);
    });
  };

  //console.log(searchWord);
  React.useEffect(() => {
    if (!searchWord) {
      dispatch(dataActions.setError(false));
      dispatch(dataActions.clearMovies());
      return;
    }
  }, [dispatch, searchWord]);

  return (
    <StyledHome>
      <Aside show={asideShow} onConfirm={() => setAsideShow(false)} />
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="title">
        <h1>Explore</h1>
      </div>
      <form className="search" onSubmit={onSearchSubmitHandler}>
        <img className="search-icon" src={SearchBlack} alt="search" />
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          value={searchWord}
          onChange={onSearchChangedHandler}
        />
        <Button className="search-button">
          <img className="search-button--icon" src={Search} alt="search" />
          <span className="search-button--text">Search</span>
        </Button>
      </form>
      {error && <ErrorView text="Movie not Found!" />}
      {loading && <Loading />}
      {movies && (
        <section className="result">
          <div className="result-title">
            <p className="result-title--subtitle">Results for:</p>
            <p>{searchWord}</p>
          </div>
          <div className="result-body">
            {movies.map((movie, idx) => (
              <MovieCard
                poster={movie.Poster}
                alt={movie.title}
                key={idx}
                onClick={() => setAsideShow(true)}
              />
            ))}
          </div>
        </section>
      )}
    </StyledHome>
  );
};

export default Home;
