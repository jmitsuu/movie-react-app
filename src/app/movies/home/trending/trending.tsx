import LayoutCard from "@/layouts/layout.card";
import { useModelMoviesTrending } from "./model.trending";
import Card from "@/app/components/card/card";

export default function Trending() {
  const { state, data } = useModelMoviesTrending();
  return   <main className="flex flex-col justify-center">
  {state.isPending && <div>Loading...</div>}
  {data.Trending?.length === 0 && (
   <h1 className="text-4xl text-red-500">
    Ocorreu um erro, tente novamente mais tarde...
   </h1>
  )}
  <LayoutCard>
   {data.Trending?.map((movie) => {
    return <Card key={movie.id} movie={movie} />;
   })}
  </LayoutCard>

 </main>;
}