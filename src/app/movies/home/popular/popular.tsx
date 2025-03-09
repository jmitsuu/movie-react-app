import Card from "@/app/components/card/card";
import LayoutCard from "@/layouts/layout.card";
import { useModelPopularMovies } from "./model.popular";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Popular() {
 const { state, data, actions } = useModelPopularMovies();
 return (
  <main className="flex flex-col justify-center">
   {state.isPending && <div>Loading...</div>}
   {data.Popular?.length === 0 && (
    <h1 className="text-4xl text-red-500">
     Ocorreu um erro, tente novamente mais tarde...
    </h1>
   )}
   <InfiniteScroll
    dataLength={Number(data.Popular?.length)}
    next={actions.updatePage}
    hasMore={true}
    loader={state.isPending && <div>Loading...</div>}
   >
    <LayoutCard>
     {data.Popular?.map((movie) => {
      return <Card key={movie.id} movie={movie} />;
     })}
    </LayoutCard>
   </InfiniteScroll>
  </main>
 );
}
