import { QueryClient } from "@tanstack/react-query";
import { LoaderFunctionArgs } from "react-router-dom";
import { getMovieDetails } from "../../services/movies";

export const movieDetailQuery = (id?: number | string) => ({
  queryKey: ["movie", id],
  queryFn: async () => getMovieDetails(id),
});

export const movieLoader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    const query = movieDetailQuery(params.movieId);
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };

export const getTime = (time?: number) => {
  if (!time) {
    return;
  }
  const hours = Math.floor(time / 60);
  const minutues = time % 60;
  return `${hours}h ${minutues}m`;
};
