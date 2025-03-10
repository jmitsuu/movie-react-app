import { TMovie } from "@/app/movies/movie.type";
import noimage from "@/assets/images/nopimage.jpg";
import { MdArrowCircleUp } from "react-icons/md";
interface TCard {
 movie: TMovie;
}
const urlImage = "https://image.tmdb.org/t/p/w500/";
export default function Card({ movie }: TCard) {
 return (
  <div className="h-full w-72 md:w-full relative transition-all cursor-pointer hover:scale-95  ">
   <div className="h-full w-full group flex items-center justify-center absolute hover:border border-blue-500 hover:bg-black/70 rounded-md scale-90 hover:scale-105 transition-all z-50">
    <h1 className="hidden group-hover:flex items-center opacity-0 font-bold font-Mont group-hover:opacity-100 transition duration-700 text-xl z-50 uppercase text-blue-600 text-center">
     Explorar <MdArrowCircleUp className="text-xl text-center" />
    </h1>
   </div>
   {movie.backdrop_path ? (
    <img
     className="rounded-md"
     src={`${urlImage}${movie?.backdrop_path}`}
     alt=""
    />
   ) : (
    <img
     className="rounded-md h-[200px] w-[372px] opacity-30"
     src={`${noimage}`}
     alt=""
    />
   )}

   {movie.title ? (
    <h1 className="text-red-500 font-bold text-center z-50">{movie.title}</h1>
   ) : (
    <h1 className="text-red-500 opacity-20 font-bold text-center">No title</h1>
   )}
   <div className=" flex items-center justify-center bg-black/80 h-8 w-8 p-2 top-2 left-1.5 rounded-full absolute">
    <h3 className="  font-bold text-sm font-lilitas  text-yellow-500 z-50">
     {movie.vote_average ? movie?.vote_average.toFixed(1) : 0}
    </h3>
   </div>
  </div>
 );
}
