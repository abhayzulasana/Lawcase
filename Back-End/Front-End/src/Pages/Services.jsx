import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Call from "../assets/call-calling.png";
import FooterBG from "../assets/FooterBG.png";

import Comme from "../assets/home/services/Frame 48(2).png";
import Intell from "../assets/home/services/Frame 48(3).png";
import Employ from "../assets/home/services/Frame 48(4).png";
import Real from "../assets/home/services/Frame 48(5).png";
import family from "../assets/services/familylaw.png";
import tax from "../assets/services/taxlaw.png";
 
import yt from "../assets/services/youtube.png"

const Hero = () => {
  return (
    <section
      className="bg-[#172423] bg-cover bg-center h-[466px]"
      style={{ backgroundImage: `url(${FooterBG})` }}
    >
      <div className="text-center py-[100px] px-4">
        <h2 className="font-bold text-[#E99F69] text-[20px]">Services</h2>
        <h3 className="font-bold text-[36px] md:text-[48px] text-white leading-tight">
        Tailored Services,<br />for Your Needs.
        </h3>
        <div className="pt-4 text-center mt-[50px]">
          <button className="inline-flex items-center space-x-3 bg-[#E99F69] hover:bg-orange-400 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-lg transition hover:scale-105 shadow">
            <img src={Call} alt="Call Icon" className="h-5 w-5" />
            <span>Get In Touch</span>
          </button>
        </div>
      </div>
    </section>
  );
};

const Service = () => {
  const navigate=useNavigate();
  const Services = [
    {
      id: "01",
      title: "Commercial Law",
      description:
        "Commercial Law governs business and commercial transactions, providing legal frameworks for contracts, sales, trade, and corporate operations. It ensures fair practices, resolves disputes, and facilitates smooth business operations.",
      image: Comme,
    },
    {
      id: "02",
      title: "Intellectual Property",
      description:
        "Intellectual Property law protects creations of the mind, such as inventions, designs, trademarks, and artistic works. It grants creators exclusive rights, fostering innovation and ensuring fair use in commerce and society.",
      image: Intell,
    },
    {
      id: "03",
      title: "Employment Law",
      description:
        "Employment Law regulates the relationship between employers and employees, covering areas like wages, workplace safety, discrimination, and benefits. It ensures fair treatment and protects the rights of both parties in the workplace.",
      image: Employ,
    },
    {
      id: "04",
      title: "Real Estate Law",
      description:
        "Real Estate Law governs the buying, selling, and use of land and property. It covers transactions, zoning, leases, and property disputes, ensuring legal compliance and protecting the rights of owners and buyers.",
      image: Real,
    },
    {
      id: "05",
      title: "Family Law",
      description:
        "Family law focuses on legal matters involving family relationships, such as marriage, divorce, child custody, adoption, and guardianship. It aims to resolve disputes while protecting the rights and interests of all family members.",
      image: family,
    },
    {
      id: "06",
      title: "Tax Law",
      description:
        "Tax law deals with regulations governing taxation, including income tax, corporate tax, and property tax. It ensures compliance with legal requirements while helping individuals and businesses manage their tax obligations effectively.",
      image: tax,
    },
  ];

  const handleClick = (id) => {
    navigate(`/services/${id}`);
  };
  
  return (
    <section>
    <div className="max-w-screen-xl px-4 mx-auto pt-[120px]">
      <div className="space-y-10">
        {Services.map((Service) => (
          <div
            key={Service.id}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b pb-8"
          >
            <div className="flex items-start gap-10">
              <img
                src={Service.image}
                alt={Service.title}
                className="w-[100px] h-[100px] sm:w-[263px] sm:h-[200px] rounded-xl object-cover"
              />
              <div>
                <span className="text-[#E99F69] font-semibold text-base">
                  {Service.id}/
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mt-1">
                  {Service.title}
                </h3>
                <p className="text-sm sm:text-base mt-2 text-gray-700 max-w-xl">
                  {Service.description}
                </p>
              </div>
            </div>
            <div>
              <button className="bg-[#E99F69]  hover:bg-orange-400 text-white  rounded-full p-5"
              onClick={()=>handleClick(Service.id)}
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>

      <div className="pt-[60px] pb-[60px] sm:pt-[80px] sm:pb-[80px] lg:pt-[120px] lg:pb-[120px]">
  <marquee className="text-[#E99F69] text-2xl sm:text-4xl md:text-6xl lg:text-[90px] font-bold">
    Intellectual Property / Commercial Law / Employment Law
  </marquee>
</div>

<div className="max-w-screen-xl mx-auto px-4">
  {/* Video/Image Section */}
  <div className="pb-8 sm:pb-12 lg:pb-[50px]">
    <img src={yt} alt="youtube" className="w-full max-w-full rounded-lg shadow-md" />
  </div>

  {/* Content Section */}
  <div className="text-center">
    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-[#172423] leading-tight">
      Dedicated to Justice, Driven by Integrity.
    </h2>
    <p className="text-sm sm:text-base md:text-lg text-[#172423] mt-4">
      At Lawcase, we offer expert legal solutions tailored to your needs.
      With a focus on justice, integrity, & results,<br className="hidden md:block" />
      our experienced team stands by your side every step of the way.
    </p>
    <button className="inline-flex mt-8 items-center space-x-3 bg-[#E99F69] hover:bg-orange-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <img src={Call} alt="Call Icon" className="h-5 w-5" />
      <span>Get In Touch</span>
    </button>
  </div>
</div>

      </section>
  );
};

const services = () => {
  return (
    <>
      <Hero />
      <Service />
    </>
  );
};

export default services;
