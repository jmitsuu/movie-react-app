import { ModalSearch } from "@/global/components/header/modal-search/modal-search";
import { useModelSearch } from "./mode.search";
import { useStore } from "@/global/store/useStore";
import LayoutCard from "@/layouts/layout.card";
import Card from "@/app/components/card/card";

export function Search() {
 const { data, state } = useModelSearch();
 const { findMovie } = useStore();
 return (
  <section>
   <ModalSearch>
    {state.isPending && <div>Loading....</div>}
    <h1 className="text-white text-xl mt-5">Voce pesquisou por: {findMovie}</h1>
    {data.dataMovie?.length ? (
     <LayoutCard>
      {data.dataMovie?.map((movie) => {
       return <Card key={movie.id} movie={movie} />;
      })}
     </LayoutCard>
    ) : (
     <div className="text-white">Filme não localizado</div>
    )}
   </ModalSearch>
  </section>
 );
}
