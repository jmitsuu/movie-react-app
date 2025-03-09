import { Routes, Route } from "react-router";
import Home from "../app/movies/home/home";
import Trending from "@/app/movies/home/trending/trending";
import Popular from "@/app/movies/home/popular/popular";
import NowPlaying from "@/app/movies/home/nowplaying/nowplaying";
import TvShows from "@/app/movies/tvshows/tvshows";
import Favorites from "@/app/movies/favorites/favorites";
// import { lazy } from "react";

export function PageRoutes() {
//  const Popular = lazy(() => import("@/app/movies/home/popular/popular"));
//  const NowPlaying = lazy(
//   () => import("@/app/movies/home/nowplaying/nowplaying")
//  );
//  const TvShows = lazy(() => import("@/app/movies/tvshows/tvshows"));
//  const Favorites = lazy(() => import("@/app/movies/favorites/favorites"));
 return (
  <Routes>
   <Route path="/" element={<Home />}>
    <Route index element={<Trending />} />
    <Route path="trending" element={<Trending />} />
    <Route path="popular" element={<Popular />} />
    <Route path="nowplaying" element={<NowPlaying />} />
   </Route>
   <Route path="/tvshows" element={<TvShows />} />
   <Route path="/favorites" element={<Favorites />} />
  </Routes>
 );
}
