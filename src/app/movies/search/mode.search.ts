import { cacheKey } from "@/cache/movies/cacheKey";
import { useQuery } from "@tanstack/react-query";
import { searchMovie } from "../services.movies";
import { useModelMenuHeader } from "@/global/components/header/model-header";
import { useStore } from "@/global/store/useStore";

export function useModelSearch() {
 const { data } = useModelMenuHeader();
 const { modalSearch } = useStore();
 const { isPending, data: dataMovie } = useQuery({
  queryKey: [cacheKey.findMovie, data?.findMovie],
  queryFn: () => searchMovie(data?.findMovie),
  enabled: modalSearch && Boolean(data?.findMovie?.trim()),
 });
 return {
  state: { isPending },
  data: { dataMovie },
 };
}
