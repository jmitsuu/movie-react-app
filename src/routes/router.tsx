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
    <div className="min-h-screen  flex items-center justify-center">
     <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
      <p className="mt-4 text-gray-600 dark:text-gray-400">Loading movies...</p>
     </div>
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
