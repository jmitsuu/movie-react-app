import { NavLink } from "react-router";
import { Input } from "../../../components/ui/input";
import { linksNavigation } from "./model-header";

export default function Header() {
 return (
  <header className="h-16 w-screen  flex items-center justify-between container mx-auto gap-x-2">
   <div className=" flex items-center">
    <h1 className="text-white">LOGO</h1>{" "}
    <div className="relative flex items-center">
     <Input
      className=" border-none z-50 text-xl w-40 absolute left-4 text-gray-200 focus-visible:ring-[1px] "
      placeholder="Search"
     />
    </div>
   </div>
   <nav className="flex lg:gap-x-10">
    {linksNavigation.map((link) => {
     return (
      <NavLink
       key={link.name}
       to={`${link.url}`}
       className="text-slate-300 text-xl uppercase"
      >
       {link.name}{" "}
      </NavLink>
     );
    })}
   </nav>
   <div className="flex items-center">
    <img src="" alt="img-profile" />
    <h1 className="text-white">Profile</h1>
   </div>
  </header>
 );
}
