import { NavLink } from "react-router";

const ArrayNavbarMovies = [
 {
  title: "Trending",
  link:'/trending'
 },
 {
  title: "Popular",
  link:'/popular'
 },
 {
  title: "Assistindo Agora",
  link:'/nowplaying'
 },
];
export default function NavbarMovies() {
 return (
  <nav className="flex justify-between items-center mt-10 py-4 w-full">
   <ul className="flex justify-between text-4xl">
    {ArrayNavbarMovies.map((NavMovies) => {
     return (
      <NavLink to={NavMovies.link} key={NavMovies.title} className="text-white mx-2 cursor-pointer underline underline-offset-8">
       {NavMovies.title}
      </NavLink>
     );
    })}
   </ul>
  </nav>
 );
}
