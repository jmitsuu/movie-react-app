import LayoutCard from "@/layouts/layout.card";
import { useModelMoviesTrending } from "./model.trending";
import Card from "@/app/components/card/card";
import InfiniteScroll from "react-infinite-scroll-component";
import LazyCardsLoading from "@/layouts/LazyCardsLoading";
export default function Trending() {
 const { state, data, actions } = useModelMoviesTrending();
 if (state.isLoading) {
  return (
   <div className="min-h-screen bg-gradient-to-br flex items-center justify-center">
    <div className="text-center">
     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
     <p className="mt-4 text-gray-600 dark:text-gray-400">Loading movie...</p>
    </div>
   </div>
  );
 }
 return (
  <main className="flex flex-col justify-center w-full z-50">
   <InfiniteScroll
    dataLength={Number(data.Trending?.length)}
    next={actions.updatePage}
    hasMore={true}
    loader={state.isPending &&  <LazyCardsLoading />}
   >
    {state.isLoading || state.isPending ? (
     <LazyCardsLoading />
    ) : (
     <LayoutCard>
      {data.Trending?.map((movie) => {
       return <Card key={movie.id} movie={movie} />;
      })}
     </LayoutCard>
    )}
   </InfiniteScroll>
  </main>
 );
}
