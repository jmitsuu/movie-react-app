import { cacheKey } from "@/cache/movies/cacheKey";
import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../../services.movies";
import { useScrollPagination } from "@/global/hooks/useScrollPagination";

export function useModelMoviesTrending() {
 const { isPending, data: Trending, isLoading } = useQuery({
  queryKey: [cacheKey.trending],
  queryFn: () => getTrendingMovies(data.page),
 });
 const { data, action } = useScrollPagination({
  cache: cacheKey.trending,
  dataQuery: Trending,
 });

 return {
  state: { isPending, isLoading },
  data: { Trending: data.dataMovies },
  actions: { updatePage: action.updatePage },
 };
}
