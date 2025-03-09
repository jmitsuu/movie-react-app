import LayoutCard from "@/layouts/layout.card";
import { useModelMoviesTrending } from "./model.trending";
import Card from "@/app/components/card/card";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Trending() {
 const { state, data, actions } = useModelMoviesTrending();
 return (
  <main className="flex flex-col justify-center">
   {state.isPending && <div>Loading...</div>}
   <InfiniteScroll
    dataLength={Number(data.Trending?.length)}
    next={actions.updatePage}
    hasMore={true}
    loader={state.isPending && <div>Loading...</div>}
   >
    <LayoutCard>
     {data.Trending?.map((movie) => {
      return <Card key={movie.id} movie={movie} />;
     })}
    </LayoutCard>
   </InfiniteScroll>
  </main>
 );
}
