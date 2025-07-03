import React from "react";
import {
  FaHandshake,
  FaBalanceScale,
  FaBullseye,
  FaLightbulb,
  FaUsers,
  FaAward,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdGavel } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Call from "../assets/call-calling.png";
import FooterBG from "../assets/FooterBG.png";
import ourmission from "../assets/AboutUs/aboutlawcase/ourmission.png";
import ourvision from "../assets/AboutUs/aboutlawcase/ourvision.png";
import law1 from "../assets/AboutUs/aboutlawcase/law1.png";
import law2 from "../assets/AboutUs/aboutlawcase/law2.png";
import whychoos from "../assets/AboutUs/aboutlawcase/whychoos.png";
import profile from "../assets/AboutUs/whychoose/Ellipse 1.png";
import Wade from "../assets/AboutUs/TeamMember/wadeWarren.png";
import jane from "../assets/AboutUs/TeamMember/JaneCooper.png";
import Esther from "../assets/AboutUs/TeamMember/EstherHoward.png";
import Leslie from "../assets/AboutUs/TeamMember/LeslieAlexander.png";
import Robert from "../assets/AboutUs/TeamMember/RobertFox.png";
import Cameron from "../assets/AboutUs/TeamMember/CameronWilliamson.png";

const Hero = () => {
  return (
    <section
      className="bg-[#172423] bg-cover bg-center h-[466px]"
      style={{ backgroundImage: `url(${FooterBG})` }}
    >
      <div className="text-center py-[100px] px-4">
        <h2 className="font-bold text-[#E99F69] text-[20px]">About Us</h2>
        <h3 className="font-bold text-[36px] md:text-[48px] text-white leading-tight">
          Dedicated to Justice,<br />Driven by Integrity.
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

const Lawcase = [
  {
    id: "01",
    name: "Our Mission",
    Desc: "To deliver exceptional legal services with integrity and a client-first approach, ensuring the best outcomes for our clients.",
    Image: ourmission,
  },
  {
    id: "02",
    name: "Our Vision",
    Desc: "To be the most trusted law firm globally, known for our innovative legal strategies and unwavering commitment to justice.",
    Image: ourvision,
  },
];

const AboutLawcase = () => {
  return (
    <section className="pt-[120px] px-7 md:px-[150px]">
      <div className="flex flex-col lg:flex-row gap-8 lg:h-[458px] justify-center items-center">
        <div className="max-w-xl">
          <h2 className="font-bold text-[20px] text-[#E99F69]">About Lawcase</h2>
          <h3 className="font-bold text-[32px] md:text-[48px] text-[#172423]">Empowering Justice Through Expertise</h3>
          <p className="mt-4 text-gray-700">
            At LawCase Law Firm, we are committed to delivering exceptional legal services with integrity and precision. Our experienced team specializes in a wide range of legal areas, providing personalized solutions tailored to your needs.
            <br /><br />Whether navigating complex disputes or offering strategic counsel, we strive to protect your rights and achieve the best possible outcomes.
          </p>
          <div className="mt-6">
            <button className="inline-flex items-center space-x-3 bg-[#E99F69] hover:bg-orange-400 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-lg transition hover:scale-105 shadow">
              <img src={Call} alt="Call Icon" className="h-5 w-5" />
              <span>Get In Touch</span>
            </button>
          </div>
        </div>
        <div className="flex gap-4 max-w-xl">
          <img src={law1} className="w-1/2 object-cover rounded-lg" />
          <img src={law2} className="w-1/2 object-cover rounded-lg mt-12" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-[80px]">
        {Lawcase.map((law) => (
          <div key={law.id} className="relative rounded-xl overflow-hidden shadow-lg">
            <img src={law.Image} alt={law.name} className="w-full object-cover" />
            <div className="absolute bottom-2 left-2 right-2   p-5">
              <h3 className="text-3xl font-bold text-white">{law.name}</h3>
              <p className="text-sm text-white mt-2">{law.Desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const services = [
    {
      icon: <FaHandshake className="text-2xl text-orange-500" />,
      title: "Client-Centric Approach",
      desc: "We prioritize our clients’ unique needs, crafting legal strategies tailored to their specific situations.",
    },
    {
      icon: <FaBalanceScale className="text-2xl text-orange-500" />,
      title: "Integrity & Transparency",
      desc: "Our team ensures honest communication and keeps you informed at every step of the process.",
    },
    {
      icon: <FaBullseye className="text-2xl text-orange-500" />,
      title: "Results-Oriented Focus",
      desc: "We focus on achieving tangible, effective outcomes for our clients with dedication and precision.",
    },
    {
      icon: <FaAward className="text-2xl text-orange-500" />,
      title: "Expertise & Excellence",
      desc: "Our experienced professionals bring extensive knowledge and skill across diverse legal fields.",
    },
    {
      icon: <FaUsers className="text-2xl text-orange-500" />,
      title: "Collaborative Partnership",
      desc: "We believe in building strong relationships with our clients, working closely to address their legal needs.",
    },
    {
      icon: <FaLightbulb className="text-2xl text-orange-500" />,
      title: "Innovative Strategies",
      desc: "Combining traditional legal practices with modern approaches, we deliver innovative solutions for complex issues.",
    },
  ];

  return (
    <div className="px-4 md:px-90 py-16 bg-white">
      <div className="text-center mb-12">
        <p className="text-orange-500 font-bold">Why Choose Us</p>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800">
          Why should you work <br/> with us?
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-6 shadow hover:shadow-md transition"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="inline-flex pt-4 text-center mt-[50px] items-center space-x-3 bg-[#E99F69] hover:bg-orange-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <img src={Call} alt="Call Icon" className="h-5 w-5" />
          <span>Get In Touch</span>
        </button>
      </div>

      {/* Founder Section */}
      <div className="mt-[120px] grid lg:grid-cols-2 gap-6 items-center">
        <div className="bg-[#E99F69] rounded-xl w-[555] h-[600px]  p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className=" rounded-full w-12 h-12">
              <img src={profile} alt="dp" />
            </div>
            <div>
              <h4 className="font-bold text-gray-800">John Canady</h4>
              <p className="text-sm text-gray-600">Founder & CEO</p>
            </div>
          </div>
          <p className="text-white font-bold text-[30px] pt-[162px] leading-relaxed">
            At LawCase Law Firm, we are committed to delivering exceptional
            legal services with integrity and precision. Our experienced team
            specializes in a wide range of legal areas, providing personalized
            solutions tailored to your needs.
          </p>
        </div>
        <div>
          <img
            src={whychoos}
            alt="Justice Statue"
            className="rounded-xl w-[555px]  h-[285px] object-cover"
          />
          <div className="grid sm:grid-cols-2  gap-4 pt-[30px] text-center">
            <div className="bg-orange-50 p-4 rounded-xl">
              <h3 className="text-[60px] font-bold text-[#E99F69]">1993</h3>
              <p className="text-[16px] text-gray-700 mt-[40px]">
                Founded in 1993, LawCase Law Firm’s dedicated team serves
                clients across the globe, with a presence in over 30 cities
                worldwide.
              </p>
            </div>
            <div className="bg-orange-50 p-4 rounded-xl">
              <h3 className="text-[60px] font-bold text-[#E99F69]">2k+</h3>
              <p className="text-[16px] text-gray-700 mt-[66px]">
                2k+ Cases Solved. LawCase Law Firm has a proven track record of
                delivering effective legal solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OurTeam = () => {
  const Team = [
    { name: "Wade Warren", roll: "Founder & CEO", image: Wade },
    { name: "Jane Cooper", roll: "Legal Consultant", image: jane },
    { name: "Esther Howard", roll: "Criminal Lawyer", image: Esther },
    { name: "Leslie Alexander", roll: "Commercial Lawyer", image: Leslie },
    { name: "Robert Fox", roll: "Employment Lawyer", image: Robert },
    { name: "Cameron Williamson", roll: "Real Estate Lawyer", image: Cameron },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-50 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-[#E99F69] text-xl font-bold">Our Team</h2>
        <h3 className="text-[#172423] text-3xl md:text-4xl font-bold">Excellence Through Teamwork</h3>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {Team.map((member, index) => (
          <div key={index} className="">
            <img src={member.image} alt={member.name} className="w-full h-auto rounded-lg" />
            <h2 className="text-xl font-bold mt-4 text-[#172423]">{member.name}</h2>
            <p className="text-sm text-[#555] mb-4">{member.roll}</p>
            <div className="flex  gap-3">
              <a href="#" className="bg-[#f3d8c5] h-10 w-10 rounded-full flex items-center justify-center text-[#E99F69] text-lg"><FaTwitter /></a>
              <a href="#" className="bg-[#f3d8c5] h-10 w-10 rounded-full flex items-center justify-center text-[#E99F69] text-lg"><FaFacebookF /></a>
              <a href="#" className="bg-[#f3d8c5] h-10 w-10 rounded-full flex items-center justify-center text-[#E99F69] text-lg"><FaInstagram /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <>
      <Hero />
      <AboutLawcase />
      <WhyChooseUs />
      <OurTeam />
    </>
  );
};

export default AboutUs;
