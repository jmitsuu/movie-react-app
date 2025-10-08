import LayoutCard from "./layout.card";

export default function LazyCardsLoading() {
 return (
  <LayoutCard>
   {[...Array(20)].map((_, i) => (
    <div
     key={i}
     className="animate-pulse h-full w-72 md:w-full relative transition-all cursor-pointer hover:scale-95 "
    >
     <div className="w-60 h-[209px]">
      {" "}
      <div className="h-40 bg-gray-300 rounded-xl"></div>
      <p className="text-center text-gray-300 rounded mt-2">Carregando</p>
     </div>
    </div>
   ))}
  </LayoutCard>
 );
}
