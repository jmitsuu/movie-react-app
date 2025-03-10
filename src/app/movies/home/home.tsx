import NavbarMovies from "@/app/components/navbar-movies/navbar.movies";
import { Outlet } from "react-router";

export default function Home() {
 return (
  <main className="flex flex-col justify-center items-center">
   <NavbarMovies />
   <Outlet />
  </main>
 );
}
