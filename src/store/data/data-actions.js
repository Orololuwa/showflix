import { dataActions } from "./data.js";
import axios from "axios";

export const fetchMovies = (searched) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`http://www.omdbapi.com/`, null, {
        params: {
          s: searched,
          apikey: "ahdjd"
        }
      });
      dispatch(dataActions.setFeeds({ movies: res.data.Search }));
    } catch (error) {
      console.log(error);
    }
  };
};
