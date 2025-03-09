import Card from "@/app/components/card/card";
import LayoutCard from "@/layouts/layout.card";
import { useModelNowPlayingMovies } from "./model.nowplaying";


export default function NowPlaying() {
const {state, data } = useModelNowPlayingMovies()
 return (
  <main className="flex flex-col justify-center">
   {state.isPending && <div>Loading...</div>}
   {data.NowPlaying?.length === 0 && (
    <h1 className="text-4xl text-red-500">
     Ocorreu um erro, tente novamente mais tarde...
    </h1>
   )}
   <LayoutCard>
    {data.NowPlaying?.map((movie) => {
     return <Card key={movie.id} movie={movie} />;
    })}
   </LayoutCard>
  </main>
 );
}
