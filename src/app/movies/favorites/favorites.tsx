import Card from "@/app/components/card/card";
import LayoutCard from "@/layouts/layout.card";
import { useModelFavorites } from "./model.favorites";

export default function Favorites() {
 const { data } = useModelFavorites();
 return (
  <section className="mt-20">
   <h1 className="text-center text-white md:text-6xl text-2xl uppercase pb-10">
    Favoritos
   </h1>
   {data?.dataFavorites.length >= 1 ? (
    <LayoutCard>
     {data.dataFavorites?.map((movie) => {
      return <Card key={movie.id} movie={movie} />;
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
