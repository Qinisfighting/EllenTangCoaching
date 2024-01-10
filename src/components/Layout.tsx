
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
 return (
    <div className="flex flex-col h-screen justify-between items-center">
     <Header />
     <main>
       <Outlet />
     </main>
     <Footer />
    </div>
 )

}


