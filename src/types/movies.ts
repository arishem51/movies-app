export type Movie = {
  release_date: string;
  title: string;
  id: number;
  vote_average: number;
  // There's more property but this is enough
};

export type MoviePage = {
  page: number;
  results: Movie[];
  date: {
    maximum: string;
    minimum: string;
  };
  total_pages: number;
  total_results: number;
};
