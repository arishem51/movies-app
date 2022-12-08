export type Movie = {
  release_date: string;
  title: string;
  id: number;
  vote_average: number;
  backdrop_path: string;
  poster_path: string;
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

export type ImageMovie = {
  id: number;
  backdrops: {
    aspect_ratio: number;
    file_path: string;
    height: number;
    vote_average: number;
    width: number;
  }[];
};
