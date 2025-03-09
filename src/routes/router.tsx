import { Routes, Route } from "react-router";
import Home from "../app/movies/home/home";
import TvShows from "@/app/movies/tvshows/tvshows";
import Movies from "@/app/movies/movies/movies";
import Trending from "@/app/movies/home/trending/trending";
import { lazy } from "react";

export function PageRoutes() {
 const Popular = lazy(() => import("@/app/movies/home/popular/popular"));
 const NowPlaying = lazy(
  () => import("@/app/movies/home/nowplaying/nowplaying")
 );
 return (
  <Routes>
   <Route path="/" element={<Home />}>
    <Route index element={<Trending />} />
    <Route path="trending" element={<Trending />} />
    <Route path="popular" element={<Popular />} />
    <Route path="nowplaying" element={<NowPlaying />} />
   </Route>
   <Route path="/tvshows" element={<TvShows />} />
   <Route path="/movies" element={<Movies />} />
  </Routes>
 );
}
