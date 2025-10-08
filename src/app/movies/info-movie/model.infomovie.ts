import { cacheKey } from "@/cache/movies/cacheKey";
import { useQuery } from "@tanstack/react-query";
import { getMovieById } from "../services.movies";
import { useParams } from "react-router";
import { TMovie } from "../movie.type";
import { toast } from "sonner";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

export function useModelInfoMovie() {
 const { id } = useParams();
 const queryClient = useQueryClient();
 const {
  isPending,
  data: MovieById,
  isLoading,
  isError,
 } = useQuery({
  queryKey: [cacheKey.findMovie, id],
  queryFn: () => getMovieById(Number(id)),
 });
 const incrFavoriteMovie = (fav: TMovie | undefined) => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const movieExists = favorites.findIndex(
   (movie: TMovie) => movie.id === fav?.id
  );
  if (movieExists >= 0) return;
  favorites.push(fav);
  toast.success("Filme Adicionados aos favoritos");
  localStorage.setItem("favorites", JSON.stringify(favorites));
 };

 useEffect(() => {
  return () => {
   queryClient.removeQueries({ queryKey: ["movie"] });
  };
 }, [id, queryClient]);
 return {
  state: { isPending, isLoading, isError },
  data: { MovieById },
  actions: { incrFavoriteMovie },
 };
}
