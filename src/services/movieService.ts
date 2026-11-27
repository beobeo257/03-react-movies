import axios from "axios";
import type { Movie } from "../types/movie";

interface TmdbSearchResponse {
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<TmdbSearchResponse>(BASE_URL, {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return response.data.results;
};
