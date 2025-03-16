import Card from "@/app/components/card/card";
import LayoutCard from "@/layouts/layout.card";
import { useModelFavorites } from "./model.favorites";
import { IoCloseCircle } from "react-icons/io5";
export default function Favorites() {
 const { data, actions } = useModelFavorites();
 return (
  <section className="mt-20">
   <h1 className="text-center text-white md:text-6xl text-2xl uppercase pb-10">
    Favoritos
   </h1>
   {data?.dataFavorites.length >= 1 ? (
    <LayoutCard>
     {data.dataFavorites?.map((movie) => {
      return (
       <div className="relative">
        <Card key={movie.id} movie={movie} />
        <IoCloseCircle
         onClick={() => {
          actions.removeMovieFavorite(movie.id);
         }}
         className="size-8  text-white cursor-pointer absolute right-2 top-2 z-50"
        />
       </div>
      );
     })}
    </LayoutCard>
   ) : (
    <div>
     <h1 className="text-red-500 text-center">
      {" "}
      nenhum filme adicionado ao favoritos
     </h1>
    </div>
   )}
  </section>
 );
}
