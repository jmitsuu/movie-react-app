import { cacheKey } from "@/cache/movies/cacheKey";
import { useQuery } from "@tanstack/react-query";
import { getNowPlayingMovies } from "../../services.movies";


export function useModelNowPlayingMovies() {
  const {isPending, data:NowPlaying} = useQuery({
    queryKey: [cacheKey.nowplaying],
    queryFn: () => getNowPlayingMovies(),
  })
  console.log(NowPlaying);
 return {
  state: {isPending},
  data: {NowPlaying},
 };
}
