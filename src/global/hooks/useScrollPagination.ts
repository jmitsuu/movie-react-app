import { TMovie } from "@/app/movies/movie.type";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
interface TPagination {
 cache: string;
 dataQuery?: TMovie[];
}
export function useScrollPagination({ cache, dataQuery }: TPagination) {
 const [page, setPage] = useState(1);
 const [dataMovies, setDataMovies] = useState<TMovie[]>([]);
 const queryClient = useQueryClient();

 const updatePage = () => {
  setPage(page + 1);
  setDataMovies((state) => state.concat(dataMovies));
  queryClient.invalidateQueries({
   queryKey: [`${cache}`],
  });
 };
 useEffect(() => {
  if (!dataQuery) return;
  setDataMovies(dataQuery);
 }, [dataQuery]);
 return {
  data: { dataMovies, page },
  action: { updatePage },
 };
}
