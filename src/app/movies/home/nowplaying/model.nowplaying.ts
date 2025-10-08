import { useQuery } from "@tanstack/react-query";
import { getNowPlayingMovies } from "../../services.movies";
import { cacheKey } from "@/cache/movies/cacheKey";
import { useScrollPagination } from "@/global/hooks/useScrollPagination";

export function useModelNowPlayingMovies() {
 const {
  isPending,
  data: NowPlaying,
  isLoading,
 } = useQuery({
  queryKey: [cacheKey.nowplaying],
  queryFn: () => getNowPlayingMovies(state.page),
 });
 const { data, action, state } = useScrollPagination({
  cache: cacheKey.nowplaying,
  dataQuery: NowPlaying,
 });
 return {
  state: { isPending, isLoading },
  data: { NowPlaying: data.dataMovies },
  actions: { updatePage: action.updatePage },
 };
}
