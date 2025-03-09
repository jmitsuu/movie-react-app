import { cacheKey } from "@/cache/movies/cacheKey";
import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../../services.movies";
import { useScrollPagination } from "@/global/hooks/useScrollPagination";

export function useModelPopularMovies() {
 const { isPending, data: Popular } = useQuery({
  queryKey: [cacheKey.popular],
  queryFn: () => getPopularMovies(data.page),
 });
 const { data, action } = useScrollPagination({
  cache: cacheKey.popular,
  dataQuery: Popular,
 });
 return {
  state: { isPending },
  data: { Popular: data.dataMovies },
  actions: { updatePage: action.updatePage },
 };
}
