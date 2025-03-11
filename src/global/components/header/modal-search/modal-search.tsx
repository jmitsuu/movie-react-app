import {
 Sheet,
 SheetContent,
 SheetHeader,
 SheetTitle,
 SheetTrigger,
} from "@/components/ui/sheet";
import { useStore } from "@/global/store/useStore";
interface TModal {
 children?: React.ReactNode;
}
export function ModalSearch({ children }: TModal) {
 const { modalSearch, setModalSearch } = useStore();
 return (
  <Sheet onOpenChange={(open) => setModalSearch(open)} open={modalSearch}>
   <SheetTrigger> </SheetTrigger>
   <SheetContent side="bottom" className="bg-black border-t h-[85vh] overflow-y-auto z-50">
    <SheetHeader className="">
     <SheetTitle className="text-white text-center text-4xl uppercase underline underline-offset-4 mt-5">
      Pesquisa
     </SheetTitle>
     {children}
    </SheetHeader>
   </SheetContent>
  </Sheet>
 );
}
