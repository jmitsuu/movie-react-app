// import { TMovie } from "@/app/movies/movie.type";
// import { useQueryClient } from "@tanstack/react-query";
// import { cache, useEffect, useState } from "react";
// interface TPagination {
//  dataQuery?: TMovie[];
// }
// export function useNewScrollPagination({ dataQuery }: TPagination) {
//  const [page, setPage] = useState(1);
//  const [loading, setLoading] = useState(false);
//  const [dataMovies, setDataMovies] = useState<TMovie[]>([]);
//  const queryClient = useQueryClient();
//  const updatPage = () => {
//   setDataMovies((state) => state.concat(dataQuery));
//   setLoading(false);
//   queryClient.invalidateQueries({
//    queryKey: [`${cache}`],
//   });
//  };
//  const handleScroll = () => {
//   if (document.body.scrollHeight - 300 < window.scrollY + window.innerHeight) {
//    setLoading(true);
//   }
//  };
//  function debounce(func, delay) {
//   let timeoutId;
//   return function (...args) {
//    if (timeoutId) {
//     clearTimeout(timeoutId);
//    }
//    timeoutId = setTimeout(() => {
//     func(...args);
//    }, delay);
//   };
//  }
//  window.addEventListener("scroll", debounce(handleScroll, 500));

//  useEffect(() => {
//   if (loading == true) {
//    setPage((prevPage) => prevPage + 1);
//   }
//  }, [loading]);
//  useEffect(() => {
//   updatPage();
//  }, [page]);
//  return {
//   data: { dataMovies, page },
//  };
// }
