import Header from "./global/components/header/header";
import { PageRoutes } from "./routes/router";
import { BrowserRouter as Routes } from "react-router";
import ScrollToTop from "./routes/scrollToUp";
import { Toaster } from "sonner";

function App() {
 return (
  <main className="bg-black min-h-screen">
   <section className="w-screen  container mx-auto pt-5">
    <Routes>
     <Header />
     <PageRoutes />
     <Toaster />
     <ScrollToTop />
    </Routes>
   </section>
  </main>
 );
}

export default App;
