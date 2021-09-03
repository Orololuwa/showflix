import { dataActions } from "./data.js";
import axios from "axios";

const apikey = process.env.REACT_APP_API_KEY;

export const fetchMovies = (searched) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`https://www.omdbapi.com/`, null, {
        params: {
          s: searched,
          apikey: apikey
        }
      });
      dispatch(dataActions.setMovies({ movies: res.data.Search }));
      dispatch(dataActions.setError({ error: res.data.Error }));
    } catch (error) {
      console.log(error);
    }
  };
};
