import { cacheKey } from "@/cache/movies/cacheKey";
import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../../services.movies";
export function useModelMoviesTrending() {
 const { isPending, data: Trending } = useQuery({
  queryKey: [cacheKey.trending],
  queryFn: () => getTrendingMovies(),
 });
 return {
  state: { isPending },
  data: { Trending },
 };
}
