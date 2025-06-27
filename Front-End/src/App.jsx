import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import ServicesDetails from "./Pages/ServiceDetails";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import Error from "./Pages/error";
import ContactUs from "./Pages/ContactUs";
import TermCondtion from "./Pages/Term&Condition"
import "./App.css";
import axios from "axios";

const fetchHero=async()=>{
    const res=await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/home/hero`);

    console.log(res.data);
;}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Services/:id" element={<ServicesDetails />} />
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Blog/:id" element={<BlogDetails />} />
        <Route path="/ContactUs" element={<ContactUs />}/>
        <Route path="/Term&Condition" element={< TermCondtion/>} />
        <Route path="*" element={<Error />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
