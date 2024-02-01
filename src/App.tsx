import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./components/Error";
import Home from "./pages/Home";
import Story from "./pages/About/Story";
import Philosophy from "./pages/About/Philosophy";
import INFP from "./pages/About/INFP";
import General from "./pages/Work/General";
import Pricing from "./pages/Work/Pricing";
import Service from "./pages/Work/Service";
import Booking from "./pages/Work/Booking";
import Blog from "./pages/Blog";
import AddArticle from "./components/Blog/AddArticle";
import FAQ from "./pages/FAQ";
import Wo from "./pages/CN/Wo";
import FuWu from "./pages/CN/FuWu";
import WenTi from "./pages/CN/WenTi";
import YuYue from "./pages/CN/YuYue";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Practice from "./pages/Practice";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<Story />} />
      <Route path="about/philosophy" element={<Philosophy />} />
      <Route path="about/infp" element={<INFP />} />
      <Route path="work" element={<General />} />
      <Route path="work/service" element={<Service />} />
      <Route path="work/pricing" element={<Pricing />} /> 
      <Route path="work/booking" element={<Booking />} />
      <Route path="blog" element={<Blog />} /> 
      <Route path="blog/add" element={<AddArticle />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="Contact" element={<Contact />} /> 
      <Route path="cn" element={<Wo />} />   
      <Route path="cn/fuwu" element={<FuWu />} />  
      <Route path="cn/wenti" element={<WenTi />} />  
      <Route path="cn/yuyue" element={<YuYue />} />   
      <Route path="terms" element={<Terms />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="practice" element={<Practice />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} /> 
}