import { Routes, Route } from "react-router";
import Home from "../app/movies/home/home";
import TvShows from "@/app/movies/tvshows/tvshows";
import Movies from "@/app/movies/movies/movies";

export function PageRoutes() {
 return (
  <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/tvshows" element={<TvShows />} />
   <Route path="/movies" element={<Movies />} />
  </Routes>
 );
}
