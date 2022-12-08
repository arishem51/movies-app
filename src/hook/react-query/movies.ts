import { useInfiniteQuery } from "@tanstack/react-query";
import { getMovieTheaters } from "../../services/movies";

export const MovieKey = {
  getListTheaters: ["movies", "theaters", "infinite"],
};

export const useMoviesTheaters = () => {
  return useInfiniteQuery({
    queryKey: MovieKey["getListTheaters"],
    queryFn: getMovieTheaters,
    getNextPageParam: (lastPage) => {
      return lastPage.total_pages - lastPage.page;
    },
  });
};
