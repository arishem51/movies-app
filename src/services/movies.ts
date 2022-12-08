import axios from "axios";
import { MoviePage } from "../types/movies";

export const getMovieTheaters = async () => {
  const list = await axios.get<MoviePage>(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=9069d3a89486e93b4a352f983c84fff7&language=vi-VN&page=1"
  );
  return list.data;
};
