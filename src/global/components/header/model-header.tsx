import { useStore } from "@/global/store/useStore";
import { useCallback, useState } from "react";

export function useModelMenuHeader() {
 const [modalMobile, setModalMobile] = useState(false);
 const { findMovie, setFindMovie, setModalSearch, searchMovie } = useStore();

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  setFindMovie(e.target.value.trim());
 };

 const searchMoviePush = useCallback(() => {
  if (findMovie) {
   searchMovie();
   setModalSearch(true);
  }
 }, [searchMovie, setModalSearch, findMovie]);

 //press enter to search
 // const inputEle = document.getElementById("enter");
 // inputEle?.addEventListener("keyup", function (e) {
 //  const key = e.which || e.keyCode;
 //  if (key == 13) {
 //   searchMoviePush();
 //  }
 // });
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

 return {
  state: { modalMobile },
  data: { linksNavigation, findMovie },
  actions: {
   setModalMobile,
   handleInputChange,
   setModalSearch,
   searchMoviePush,
  },
 };
}
