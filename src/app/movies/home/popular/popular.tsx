import Card from "@/app/components/card/card";
import LayoutCard from "@/layouts/layout.card";
import { useModelPopularMovies } from "./model.popular";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Popular() {
 const { state, data, actions } = useModelPopularMovies();
 return (
  <main className="flex flex-col justify-center">
   {state.isPending && <div>Loading...</div>}
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
