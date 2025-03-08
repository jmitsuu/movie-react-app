import Header from "./global/components/header/header";
import { PageRoutes } from "./routes/router";
import { BrowserRouter as Routes } from "react-router";

function App() {
 return (
  <main className="bg-[#242424]">
   <section className="w-screen container mx-auto pt-5 ">
    <Routes>
     <Header />
     <PageRoutes />
    </Routes>
   </section>
  </main>
 );
}

export default App;
