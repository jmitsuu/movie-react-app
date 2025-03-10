import { Routes, Route } from "react-router";
import Home from "../app/movies/home/home";
import Trending from "@/app/movies/home/trending/trending";
import { lazy, Suspense } from "react";
// import { InfoMovie } from "@/app/movies/info-movie/infomovie";

export function PageRoutes() {
 const Popular = lazy(() => import("@/app/movies/home/popular/popular"));
 const NowPlaying = lazy(
  () => import("@/app/movies/home/nowplaying/nowplaying")
 );
 const TvShows = lazy(() => import("@/app/movies/tvshows/tvshows"));
 const Favorites = lazy(() => import("@/app/movies/favorites/favorites"));
 const InfoMovie = lazy(() => import("@/app/movies/info-movie/infomovie"));
 return (
  <Suspense
   fallback={
    <div className="h-screen w-full flex items-center justify-center text-4xl text-slate-400">
     Carregando..
    </div>
   }
  >
   <Routes>
    <Route path="/" element={<Home />}>
     <Route index element={<Trending />} />
     <Route path="trending" element={<Trending />} />
     <Route path="popular" element={<Popular />} />
     <Route path="nowplaying" element={<NowPlaying />} />
    </Route>
    <Route path="/movie/:id" element={<InfoMovie />} />
    <Route path="/tvshows" element={<TvShows />} />
    <Route path="/favorites" element={<Favorites />} />
   </Routes>
  </Suspense>
 );
}
