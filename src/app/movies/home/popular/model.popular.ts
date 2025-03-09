import { cacheKey } from "@/cache/movies/cacheKey";
import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../../services.movies";

export function useModelPopularMovies() {
 const { isPending, data: Popular } = useQuery({
  queryKey: [cacheKey.popular],
  queryFn: () => getPopularMovies(),
 });
 console.log(Popular);
 return {
  state: { isPending },
  data: { Popular },
 };
}
