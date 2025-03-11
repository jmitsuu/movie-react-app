import { useState } from "react";

export function useModelMenuHeader() {
 const [modalMobile, setModalMobile] = useState(false);
 const [modalSearch, setModalSearch] = useState(false);
 const [findMovie, setFindMovie] = useState("");
 const linksNavigation = [
  {
   name: "Home",
   url: "/trending",
   icon: "",
  },
  {
   name: "TV Shows",
   url: "/tvshows",
   icon: "",
  },
  {
   name: "Favoritos",
   url: "/favorites",
   icon: "",
  },
 ];
 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  setFindMovie(e.target.value);
 };
const searchMovie = () =>{
if(findMovie){
  console.log(modalSearch)
  setModalSearch(true);
}
}
 return {
  state: { modalMobile, modalSearch },
  data: { linksNavigation, findMovie },
  actions: { setModalMobile, handleInputChange, setModalSearch, searchMovie },
 };
}
