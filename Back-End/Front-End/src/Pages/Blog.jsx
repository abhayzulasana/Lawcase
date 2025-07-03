import React from "react";
import { Link } from "react-router-dom";

import Call from "../assets/call-calling.png";
import FooterBG from "../assets/FooterBG.png";

import Business from "../assets/home/blog/business.png";
import Finance from "../assets/home/blog/finance.png";
import Taxation from "../assets/home/blog/taxation.png";
import Commercial from "../assets/Blog/Commercial.png";
import Family from "../assets/Blog/Family.png";
import Employment from "../assets/Blog/Employment.png";

const Hero = () => {
  return (
    <section
      className="bg-[#172423] overflow-hidden bg-cover bg-center h-[466px]"
      style={{ backgroundImage: `url(${FooterBG})` }}
    >
      <div className="text-center pt-[130px] pb-[100px]">
        <h2 className="font-bold text-[#E99F69] text-[20px]">Blog</h2>
        <h3 className="font-bold text-[48px] text-[#FFFFFF]">
        Read From Our Blogs
        </h3>
        <div className="pt-4 text-center mt-[50px]">
          <button className="inline-flex items-center space-x-3 bg-[#E99F69] hover:bg-orange-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <img src={Call} alt="Call Icon" className="h-5 w-5" />
            <span>Get In Touch</span>
          </button>
        </div>
      </div>
    </section>
  );
};

const blogData = [
  {
    id: 1,
    name: "Business",
    des: "10 Key Questions to Ask Before Hiring a Law Firm",
    image:Business,
  },
  {
    id: 2,
    name: "Finance",
    des: "How a Law Firm Can Help Protect Your Business",
    image:Finance,

  },
  {
    id: 3,
    name: "Taxation",
    des: "The Role of a Law Firm in Resolving Disputes",
    image:Taxation,

  },
  {
    id: 4,
    name: "Commercial",
    des: "The Role of a Commercial Law Firm",
    image:Commercial,

  },
  {
    id: 5,
    name: "Family",
    des: "Key Legal Challenges Businesses Face",
    image:Family,

  },
  {
    id: 6,
    name: "Employment",
    des: "Choosing the Right Law Firm for Your Business",
    image:Employment,

  },

];
const Blog2 = () => {
  return (
    <section className="pt-10 pb-[120px] px-4 md:px-12   py-10 max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center gap-[30px] pb-[50px] ">
        {blogData.map((blog) => (
        <Link to={`/blog/${blog.id}`} key={blog.id}>          
        <div  className="border-b-2 border-gray-300 w-[360px] h-[470px]" >
            <img src={blog.image}/>
            <h2 className="text-[#E99F69] text-[16px] font-bold pt-[30px] pb-[10px]">{blog.name}</h2>
            <h3 className="text-[30px] text-[#172423] font-bold">{blog.des}</h3>
          </div>
          </Link>
        ))}
      </div>

    </section>
  );
};


const Blog =()=>{
    return(
        <>
        <Hero />
        <Blog2 />
        </>
    );
}

export default Blog