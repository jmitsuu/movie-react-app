import { NavLink } from "react-router";
import { ArrayNavbarMovies } from "./arraynavbarmovies";


export default function NavbarMovies() {
 return (
  <nav className="flex justify-between items-center text-center  mt-10 py-4 w-full">
   <ul className="flex md:flex-row flex-col justify-between items-center md:w-auto w-full  md:text-4xl text-2xl">
    {ArrayNavbarMovies.map((NavMovies) => {
     return (
      <NavLink
       to={NavMovies.link}
       key={NavMovies.title}
       className={({ isActive }: { isActive: boolean }) =>
        ` mx-2 cursor-pointer underline underline-offset-8  ${
         isActive ? "text-red-500 " : "text-white "
        }`
       }
      >
       {NavMovies.title}
      </NavLink>
     );
    })}
   </ul>
  </nav>
 );
}
