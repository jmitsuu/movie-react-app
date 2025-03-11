import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
 } from "@/components/ui/sheet";
import { useModelMenuHeader } from "../model-header";

 export function ModalSearch() {
  const {actions, state } = useModelMenuHeader();
  return (
   <Sheet onOpenChange={actions.setModalSearch} open={state.modalSearch} >
    <SheetTrigger>
     {" "}
    </SheetTrigger>
    <SheetContent side="bottom" className="bg-black border-none h-[85vh]">
     <SheetHeader>
      <SheetTitle className="text-white text-center text-2xl mt-5">
       LOGO
      </SheetTitle>
      <SheetDescription>
    testeeeee
      </SheetDescription>
     </SheetHeader>
    </SheetContent>
   </Sheet>
  );
 }
 