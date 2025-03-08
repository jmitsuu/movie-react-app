import { cacheKey } from "@/cache/movies/cacheKey";
import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "./services.movies";
export function useModelMovies() {
 const { isPending, data: Trending,  } = useQuery({
  queryKey: [cacheKey.trending],
  queryFn: () => getTrendingMovies(),
 });
console.log(Trending)
 return {
  state: { isPending },
  data: { Trending },
 };
}
