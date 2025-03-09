import Card from "@/app/components/card/card";
import LayoutCard from "@/layouts/layout.card";
import { useModelNowPlayingMovies } from "./model.nowplaying";
import InfiniteScroll from "react-infinite-scroll-component";

export default function NowPlaying() {
 const { state, data, actions } = useModelNowPlayingMovies();
 return (
  <main className="flex flex-col justify-center">
   {state.isPending && <div>Loading...</div>}
   <InfiniteScroll
    dataLength={Number(data.NowPlaying?.length)}
    next={actions.updatePage}
    hasMore={true}
    loader={state.isPending && <div>Loading...</div>}
   >
    <LayoutCard>
     {data.NowPlaying?.map((movie) => {
      return <Card key={movie.id} movie={movie} />;
     })}
    </LayoutCard>
   </InfiniteScroll>
  </main>
 );
}
