
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
 return (
    <div className="flex flex-col justify-between items-center text-myblue-900">
     <Header />
     <main>
       <Outlet />
     </main>
     <Footer />
    </div>
 )

}


