import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";
import { MovieKey } from "../hook/react-query/movies";
import { MoviePage } from "../types/movies";

type MovieTheatersProps = QueryFunctionContext<
  typeof MovieKey["getListTheaters"]
>;
type MovieTopRatedProps = QueryFunctionContext<
  typeof MovieKey["getListTopRated"]
>;

export const getMovieTheaters = async ({
  pageParam = 1,
}: MovieTheatersProps) => {
  const list = await axios.get<MoviePage>(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=9069d3a89486e93b4a352f983c84fff7&language=vi-VN&page=${pageParam}`
  );
  return list.data;
};

export const getMovieTopRated = async ({
  pageParam = 1,
}: MovieTopRatedProps) => {
  const list = await axios.get<MoviePage>(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=9069d3a89486e93b4a352f983c84fff7&language=vi-VN&page=${pageParam}`
  );
  return list.data;
};
