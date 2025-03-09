
import { useQuery } from "@tanstack/react-query";
import { getNowPlayingMovies } from "../../services.movies";
import { cacheKey } from "@/cache/movies/cacheKey";


export function useModelNowPlayingMovies() {
  const {isPending, data:NowPlaying} = useQuery({
    queryKey: [cacheKey.nowplaying],
    queryFn: () => getNowPlayingMovies(),
  })
 return {
  state: {isPending},
  data: {NowPlaying},
 };
}
