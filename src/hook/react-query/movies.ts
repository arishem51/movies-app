import { useInfiniteQuery } from "@tanstack/react-query";
import { getMovieTheaters, getMovieTopRated } from "../../services/movies";

export const MovieKey = {
  getListTheaters: ["movies", "theaters", "infinite"] as const,
  getListTopRated: ["movies", "top-rated", "infinite"] as const,
};

export const useMoviesTheaters = () => {
  return useInfiniteQuery({
    queryKey: MovieKey["getListTheaters"],
    queryFn: getMovieTheaters,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages;
    },
  });
};

export const useMoviesTopRated = () => {
  return useInfiniteQuery({
    queryKey: MovieKey["getListTopRated"],
    queryFn: getMovieTopRated,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages;
    },
  });
};
