import { NavLink } from "react-router";
import { Input } from "../../../components/ui/input";
import { linksNavigation } from "./model-header";
import iconProfile from "@/assets/images/iconProfile.webp";
import {MdMenu } from "react-icons/md";

export default function Header() {
 return (
  <header className="h-16 w-screen md:px-0 px-4 flex items-center justify-between container mx-auto gap-x-2">
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
       className={({ isActive }: { isActive: boolean }) =>
        `md:flex hidden  cursor-pointer  text-xl uppercase hover:text-red-500 transition-all ${
         isActive ? "text-red-500 underline  underline-offset-8 " : "text-white"
        }`
       }
      >
       {link.name}{" "}
      </NavLink>
     );
    })}
   </nav>
   <MdMenu className="text-white mr-2 text-3xl cursor-pointer md:hidden flex"/>
   <div className="md:flex justify-center items-center border p-2 gap-1 rounded-xl border-red-500 hidden">
    <img src={iconProfile} alt="img-profile" className="h-6 " />
    <h1 className="text-white">John Doe</h1>
   </div>
  </header>
 );
}
