import {
 Sheet,
 SheetContent,
 SheetDescription,
 SheetHeader,
 SheetTitle,
 SheetTrigger,
} from "@/components/ui/sheet";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router";
import { useModelMenuHeader } from "../model-header";

export function MenuMobile() {
 const { data, actions, state } = useModelMenuHeader();
 return (
  <Sheet onOpenChange={actions.setModalMobile} open={state.modalMobile} >
   <SheetTrigger>
    {" "}
    <MdMenu className="text-white mr-2 text-3xl cursor-pointer md:hidden flex" />
   </SheetTrigger>
   <SheetContent className="bg-black border-none h-96">
    <SheetHeader>
     <SheetTitle className="text-white text-center text-2xl mt-5">
      LOGO
     </SheetTitle>
     <SheetDescription>
      <nav className="flex flex-col items-center justify-around h-full mt-20">
       {data.linksNavigation.map((link) => {
        return (
         <NavLink
          key={link.name}
          to={`${link.url}`}
          onClick={()=>{actions.setModalMobile(false)}}
          className={({ isActive }: { isActive: boolean }) =>
           `  cursor-pointer  text-3xl uppercase hover:text-red-500 transition-all ${
            isActive
             ? "text-red-500 underline  underline-offset-8 "
             : "text-white"
           }`
          }
         >
          {link.name}{" "}
         </NavLink>
        );
       })}
      </nav>
     </SheetDescription>
    </SheetHeader>
   </SheetContent>
  </Sheet>
 );
}
