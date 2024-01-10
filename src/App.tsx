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
import Mission from "./pages/About/Mission";
import INFP from "./pages/About/INFP";
import Pricing from "./pages/Work/Pricing";
import Service from "./pages/Work/Service";
import Booking from "./pages/Work/Booking";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Wo from "./pages/CN/Wo";
import FuWu from "./pages/CN/FuWu";
import YuYue from "./pages/CN/YuYue";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Practice from "./pages/Practice";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="story" element={<Story />} />
      <Route path="philosophy" element={<Philosophy />} />
      <Route path="misson" element={<Mission />} />
      <Route path="infp" element={<INFP />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="service" element={<Service />} />
      <Route path="booking" element={<Booking />} />
      <Route path="blog" element={<Blog />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="Contact" element={<Contact />} /> 
      <Route path="wo" element={<Wo />} />   
      <Route path="fuwu" element={<FuWu />} />  
      <Route path="yuyue" element={<YuYue />} />   
      <Route path="terms" element={<Terms />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="practice" element={<Practice />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}