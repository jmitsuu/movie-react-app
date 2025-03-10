import { cacheKey } from "@/cache/movies/cacheKey";
import { useQuery } from "@tanstack/react-query";
import { getMovieById } from "../services.movies";
import { useParams } from "react-router";

export function useModelInfoMovie() {
  const {id} = useParams()
 const { isPending, data: MovieById } = useQuery({
  queryKey: [cacheKey.findMovie],
  queryFn:()=> getMovieById(Number(id))
 });
 console.log(MovieById)
 return {
  state: { isPending },
  data: { MovieById },
 };
}
