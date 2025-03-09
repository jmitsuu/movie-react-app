import { TMovie } from "@/app/movies/movie.type";

interface TCard {
 movie: TMovie;
}
const urlImage = "https://image.tmdb.org/t/p/w500/";
export default function Card({ movie }: TCard) {
 return (
  <div className="h-full w-80 md:w-full relative transition-all scale-100 hover:scale-105 cursor-pointer">
   <img
    className="rounded-xs"
    src={`${urlImage}${movie.backdrop_path}`}
    alt=""
   />
   {movie.title ? (
    <h1 className="text-red-500 font-bold text-center">{movie.title}</h1>
   ) : (
    <h1 className="text-red-500 opacity-20 font-bold text-center">No title</h1>
   )}
   <div className=" flex items-center justify-center bg-black/80 h-8 w-8 p-2 top-2 left-1.5 rounded-full absolute">
    <h3 className="  font-bold text-sm font-lilitas  text-yellow-500">
     {movie.vote_average.toFixed(1)}
    </h3>
   </div>
  </div>
 );
}
