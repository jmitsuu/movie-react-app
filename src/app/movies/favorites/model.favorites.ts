import { useEffect, useState } from "react";
import { TMovie } from "../movie.type";

export function useModelFavorites() {
 const [dataFavorites, setDataFavorites] = useState<TMovie[]>([]);

 useEffect(() => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  setDataFavorites(favorites);
 }, []);
 return {
  data: { dataFavorites },
 };
}
