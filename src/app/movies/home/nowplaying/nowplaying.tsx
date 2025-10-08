import Card from "@/app/components/card/card";
import LayoutCard from "@/layouts/layout.card";
import { useModelNowPlayingMovies } from "./model.nowplaying";
import InfiniteScroll from "react-infinite-scroll-component";
import LazyCardsLoading from "@/layouts/LazyCardsLoading";

export default function NowPlaying() {
 const { state, data, actions } = useModelNowPlayingMovies();
 return (
  <main className="flex flex-col justify-center">
   <InfiniteScroll
    dataLength={Number(data.NowPlaying?.length)}
    next={actions.updatePage}
    hasMore={true}
    loader={state.isPending &&  <LazyCardsLoading />}
   >
    {state.isLoading || state.isPending ? (
     <LazyCardsLoading />
    ) : (
     <LayoutCard>
      {data.NowPlaying?.map((movie) => {
       return <Card key={movie.id} movie={movie} />;
      })}
     </LayoutCard>
    )}
   </InfiniteScroll>
  </main>
 );
}
