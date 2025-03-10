import { Button } from "@/components/ui/button";
import { useModelInfoMovie } from "./model.infomovie";
import mockimage from "@/assets/images/1.webp";
const urlImage = "https://image.tmdb.org/t/p/original/";
export default function InfoMovie() {
 const { state, data } = useModelInfoMovie();
 return (
  <main className="mt-10 w-full container mx-auto">
   {state.isPending && <div>Loading...</div>}
   <div className="md:relative ">
    <div className="w-full h-full md:flex hidden bg-black/50 z-50 absolute"></div>
    <div className="p-8 m-4 rounded-full  bg-black/80 z-50 absolute right-4 border-2 border-yellow-500">
     <h2 className="font-bold md:text-9xl text-4xl font-lilitas  text-yellow-500">
      {data.MovieById?.vote_average.toFixed(1)}
     </h2>
    </div>
    {data.MovieById?.backdrop_path ? (
     <img
      src={urlImage + `${data.MovieById?.backdrop_path}`}
      className="w-full lg:h-full md:h-[550px] container mx-auto"
     />
    ) : (
     <img src={mockimage} alt="fake-img" className="w-full container mx-auto" />
    )}
    <div className="md:absolute top-0 md:my-40 lg:w-[700px] md:w-[400px] z-50 h-full text-pretty p-4">
     <h1 className="text-6xl font-bold uppercase  text-white">
      {data.MovieById?.title}
     </h1>
     <p className="text-gray-300 mt-10">
      {data.MovieById?.overview
       ? data.MovieById?.overview
       : "Desculpe! Não foi adicionada uma descrição até o momento"}
     </p>
     <div className=" h-20 w-40 mt-10 flex items-center">
      <Button className="w-60 h-20 rounded-xs bg-white text-black text-3xl cursor-pointer hover:bg-gray-100 ">
       PLAY
      </Button>
     </div>
     <h2 className="mt-10 text-xl text-white">{data.MovieById?.tagline}</h2>
    </div>
    <div className="w-full min-h-40 md:absolute  bottom-0 z-50">
     <div className=" md:float-right space-y-4 md:m-4 min-w-40 min-h-40 md:px-8 px-4 ">
      <h1 className="text-white underline font-bold text-xl">Genero</h1>
      <ul className="flex  gap-x-5  relative">
       {data.MovieById?.genres?.map((genre) => {
        return (
         <li key={genre.id} className="text-white ">
          {genre.name}
         </li>
        );
       })}
      </ul>
      <h1 className="text-white underline font-bold text-xl">Produtora</h1>
      <ul className=" text-white">
       {data.MovieById?.production_companies
        ? data.MovieById?.production_companies?.map((production) => {
           return <li key={production.id}>{production.name}</li>;
          })
        : "Sem informações"}
      </ul>
     </div>
    </div>
   </div>
  </main>
 );
}
