import { TMovie } from "@/app/movies/movie.type";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
interface TPagination {
 cache: string;
 dataQuery?: TMovie[];
}
export function useScrollPagination({ cache, dataQuery }: TPagination) {
 const [page, setPage] = useState(1);
 const [dataMovies, setDataMovies] = useState<TMovie[]>([]);
 const queryClient = useQueryClient();

 const updatePage = useCallback(() => {
  queryClient.invalidateQueries({
   queryKey: [`${cache}`],
  });
 }, [cache, queryClient]);
 useEffect(() => {
  setPage((prev) => prev + 1);
  if (dataQuery) {
   setDataMovies((prev) => {
    const merged = [...prev, ...dataQuery];
    const unique = Array.from(new Map(merged.map((m) => [m.id, m])).values());
    return unique;
   });
  }
 }, [dataQuery]);
 return {
  state: { page },
  data: { dataMovies, page },
  action: { updatePage },
 };
}
