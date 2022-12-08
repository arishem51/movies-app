import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";
import { MovieKey } from "../hook/react-query/movies";
import { MoviePage } from "../types/movies";

type Props = QueryFunctionContext<typeof MovieKey["getListTheaters"]>;

export const getMovieTheaters = async ({ pageParam = 1 }: Props) => {
  const list = await axios.get<MoviePage>(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=9069d3a89486e93b4a352f983c84fff7&language=vi-VN&page=${pageParam}`
  );
  return list.data;
};
