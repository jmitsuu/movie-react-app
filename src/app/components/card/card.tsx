import { TMovie } from "@/app/movies/movie.type";

interface TCard {
 movie: TMovie;
}
const urlImage = "https://image.tmdb.org/t/p/w500/";
export default function Card({ movie }: TCard) {
 return (
  <div className="h-full w-80 md:w-full">
   <img
    className="rounded-xs"
    src={`${urlImage}${movie.backdrop_path}`}
    alt=""
   />
   {movie.title ? (
    <h1 className="text-gray-200 font-bold text-center">{movie.title}</h1>
   ) : (
    <h1 className="text-gray-200 opacity-20 font-bold text-center">No title</h1>
   )}
  </div>
 );
}
