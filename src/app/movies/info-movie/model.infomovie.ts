import { cacheKey } from "@/cache/movies/cacheKey";
import { useQuery } from "@tanstack/react-query";
import { getMovieById } from "../services.movies";
import { useParams } from "react-router";
import { TMovie } from "../movie.type";
import { toast } from "sonner";

export function useModelInfoMovie() {
 const { id } = useParams();

 const { isPending, data: MovieById } = useQuery({
  queryKey: [cacheKey.findMovie],
  queryFn: () => getMovieById(Number(id)),
 });
 console.log(MovieById);
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

 return {
  state: { isPending },
  data: { MovieById },
  actions: { incrFavoriteMovie },
 };
}
