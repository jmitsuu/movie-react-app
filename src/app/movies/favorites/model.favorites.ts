import { useEffect, useState } from "react";
import { TMovie } from "../movie.type";
import { toast } from "sonner";

export function useModelFavorites() {
 const [dataFavorites, setDataFavorites] = useState<TMovie[]>([]);
 const removeMovieFavorite = (id: number) => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const newFav = favorites.filter((movie: { id: number }) => movie.id !== id);
  if(newFav){
    toast.success("Filme removido dos favoritos.")
  }
  setDataFavorites(newFav);
  localStorage.setItem("favorites", JSON.stringify(newFav));
 };
 useEffect(() => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  setDataFavorites(favorites);
 }, []);
 return {
  data: { dataFavorites },
  actions: { removeMovieFavorite },
 };
}
