import Card from "@/app/components/card/card";
import { useModelMovies } from "../model.movies";
import LayoutCard from "@/layouts/layout.card";

export default function Home() {
 const { state, data } = useModelMovies();
 return (
  <main className="flex justify-center">
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
  </main>
 );
}
