import { useEffect, useState } from "react";
import { Minus, Plus, ArrowRight } from "lucide-react";

import BG from "../assets/BG.jpg";
import TaglineLeft from "../assets/Taglinevector-Left.svg";
import TaglineRight from "../assets/Taglinevector-Right.svg";
import Call from "../assets/call-calling.png";
import {getHeroSection} from "../api/heroAPI.jsx"
import Client01 from "../assets/home/Client 01.svg";
import Client02 from "../assets/home/Client 02.svg";
import Client03 from "../assets/home/Client 03.svg";
import Client04 from "../assets/home/Client 04.svg";
import Client05 from "../assets/home/Client 05.svg";
import Client06 from "../assets/home/Client 06.svg";
import Client07 from "../assets/home/Client 07.svg";
import Client08 from "../assets/home/Client 08.svg";
import imgJustice from "../assets/home/Frame 48.png";
import imgIntegrity from "../assets/home/Frame 49.png";
import imgResults from "../assets/home/Frame 50.png";
import justice from "../assets/home/_Button base.png";
import integrity from "../assets/home/_Button base(1).png";
import result from "../assets/home/_Button base(2).png";
import Comme from "../assets/home/services/Frame 48(2).png";
import Intell from "../assets/home/services/Frame 48(3).png";
import Employ from "../assets/home/services/Frame 48(4).png";
import Real from "../assets/home/services/Frame 48(5).png";
import consu from "../assets/home/process/process1.png";
import strategy from "../assets/home/process/process2.png";
import execu from "../assets/home/process/process3.png";
import cust1 from "../assets/home/testimonials/cust1.png";
import cust2 from "../assets/home/testimonials/cust2.png";
import cust3 from "../assets/home/testimonials/cust3.png";
import cust4 from "../assets/home/testimonials/cust4.png";
import Business from "../assets/home/blog/business.png";
import Finance from "../assets/home/blog/finance.png";
import Taxation from "../assets/home/blog/taxation.png";
import axios from "axios";

const Hero = () => {
  return (
    <section
    className="relative w-full min-h-screen h-full bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: `url(${BG})` }}
  >
        <div className="absolute inset-0"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32">
        <div className="grid gap-12 lg:grid-cols-2 items-center min-h-[calc(100vh-8rem)]">
          <div className="text-white space-y-8">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <img src={TaglineLeft} alt="Tagline Left" className="h-5 w-5" />
              <span className="text-sm font-medium">Award Winning Law Firm</span>
              <img src={TaglineRight} alt="Tagline Right" className="h-5 w-5" />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Advocating Justice,
                <span className="text-white block">Delivering Results</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                Our law firm combines legal expertise with personalized solutions to protect your rights and achieve your goals.
              </p>
            </div>

            <div className="pt-4">
              <button className="inline-flex items-center space-x-3 bg-[#E99F69] hover:bg-orange-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <img src={Call} alt="Call Icon" className="h-5 w-5" />
                <span>Get In Touch</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-10 w-16 sm:w-20 h-16 sm:h-20 bg-orange-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-10 w-24 sm:w-32 h-24 sm:h-32 bg-orange-400/10 rounded-full blur-xl"></div>
    </section>
  );
};

const Stripe = () => {
  return (
    <div className="text-center py-4  bg-[#e99e6917]">
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-25">
        {[Client08, Client07, Client06, Client05, Client04, Client03, Client02, Client01].map((client, i) => (
          <img key={i} src={client} alt={`Client ${i}`} className="h-11 sm:h-12 md:h-25" />
        ))}
      </div>
    </div>
  );
};

const values = [
  {
    icon: justice,
    title: "Justice",
    description: "Committed to fairness and trusted outcomes.",
    image: imgJustice,
  },
  {
    icon: integrity,
    title: "Integrity",
    description: "Driven by honesty and ethical practices.",
    image: imgIntegrity,
  },
  {
    icon: result,
    title: "Results",
    description: "Delivering success with expertise & determination.",
    image: imgResults,
  },
];
const AboutUs = () => {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-40 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <div className="space-y-9">
        <p className="text-orange-500 font-semibold">About Us</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
          Dedicated to Justice,<br />Driven by Integrity.
        </h2>
        <p className="text-gray-600 max-w-md">
          At Lawcase, we offer expert legal solutions tailored to your needs. With a focus on justice, integrity, & results, our experienced team stands by your side every step of the way.
        </p>
        <button className="flex h-12 sm:h-14 items-center text-lg sm:text-2xl space-x-2 rounded-full bg-[#E99F69] hover:bg-orange-400 text-white px-6 py-2 font-bold">
          <img src={Call} alt="Call Icon" className="h-5 w-5" />
          <span>Get In Touch</span>
        </button>
      </div>

      <div className="space-y-7">
        {values.map((value, index) => (
          <div key={index} className="relative rounded-2xl overflow-hidden">
            <img
              src={value.image}
              alt={value.title}
              className="w-full md:max-w-[665px] max-h-[410px] objec object-center filter brightness-75"
            />
            <div className="absolute top-6 left-5 bg-white backdrop-blur-md rounded-xl p-5 max-w-[45%] sm:max-w-[35%] shadow-md">
              <div className="flex items-center space-x-3">
                <img src={value.icon} className="h-10 w-10" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>
              </div>
              <p className="text-sm sm:text-md text-gray-700 mt-1">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Choose = () => {
  return (
    <section className="bg-[#faece2] mt-12 mb-28 lg:ml-40 lg:mr-40 rounded-2xl">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 py-12">
        {/* Title & Button */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-inter">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg pt-5 pb-8 max-w-4xl">
            We offer a comprehensive array of legal services tailored to meet the diverse needs of our clients.
          </p>
          <button className="flex items-center gap-2 text-lg sm:text-2xl font-bold rounded-full bg-[#E99F69] hover:bg-orange-400 text-white px-6 py-3">
            <img src={Call} alt="Call Icon" className="h-5 w-5" />
            <span>Get In Touch</span>
          </button>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap gap-10 sm:gap-20 pt-12 justify-start">
          {[
            { label: 'Years Of Law Experience', value: '20+' },
            { label: 'Happy Clients', value: '2k+' },
            { label: 'Awards Winner', value: '28+' },
          ].map((item, i) => (
            <div key={i} className="text-center sm:text-left">
              <h3 className="text-[#E99F69] font-bold font-inter text-4xl sm:text-5xl md:text-6xl">
                {item.value}
              </h3>
              <p className="text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
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
];

const Services = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px- py-">
      <div className="text-center mb-12">
        <p className="text-[#E99F69] font-bold text-[16px] text-sm uppercase">
          Services
        </p>
        <h2 className="text-3xl text-[48px] font-inter sm:text-4xl font-bold mt-2">
          Explore Our Services
        </h2>
      </div>

      <div className="space-y-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b pb-8"
          >
            <div className="flex items-start gap-10">
              <img
                src={service.image}
                alt={service.title}
                className="w-[100px] h-[100px] sm:w-[263px] sm:h-[200px] rounded-xl object-cover"
              />
              <div>
                <span className="text-[#E99F69] font-semibold text-base">
                  {service.id}/
                </span>
                <h3 className="text-xl sm:text-3xl font-bold mt-1">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base mt-2 text-gray-700 max-w-xl">
                  {service.description}
                </p>
              </div>
            </div>
            <div>
              <button className="bg-[#E99F69]  hover:bg-orange-400 text-white  rounded-full p-5">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-[#E99F69] hover:bg-orange-400 text-white font-bold px-6 py-3 rounded-full">
          View All Services
        </button>
      </div>
    </section>
  );
};

const steps = [
  {
    id: "01",
    title: "Consultation",
    description:
      "Providing expert legal advice tailored to your specific needs",
    image: consu,
  },
  {
    id: "02",
    title: "Strategy & Planning",
    description: "Developing a customized legal approach to achieve your goals",
    image: strategy,
  },
  {
    id: "03",
    title: "Execution ",
    description:
      "Executing the legal strategy for resolution of your legal matters.",
    image: execu,
  },
];
const Process = () => {
  return (
    <section className="  pt-[120px] pb-[120px]">
      <div className="text-center">
        <h2 className="text-[#E99F69] font-bold text-[18px]">Process</h2>
        <h3 className=" font-bold text-[48px]">Explore Our Process</h3>
      </div>

      <div className="flex flex-wrap  md:grid-cols-3 justify-center gap-15 mt-[50px]">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative rounded-xl justify-center overflow-hidden "
          >
            <img src={step.image} alt={step.title} className=" object-cover" />
            <div className="absolute bottom-4 left-4 right-4 bg-white p-5 rounded-xl shadow-md">
              <div className="bg-[#E99F69] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-2">
                {step.id}
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="text-sm text-gray-700 mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-4 text-center mt-[50px]">
        <button className="inline-flex items-center space-x-3 bg-[#E99F69] hover:bg-orange-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <img src={Call} alt="Call Icon" className="h-5 w-5" />
          <span>Get In Touch</span>
        </button>
      </div>
    </section>
  );
};

const customer = [
  {
    id: 1,
    desc: "Excellent legal expertise! They provided clear advice and resolved my case efficiently. Highly recommended.",
    name: "Jane Cooper",
    office: "Abstergo Ltd.",
    image: cust1,
  },
  {
    id: 2,
    desc: "Professional and reliable team—handled my legal matters with precision and care. Greatexperience!",
    name: "Brooklyn Simmons",
    office: "Acme Co.",
    image: cust2,
  },
  {
    id: 3,
    desc: "Outstanding service! Their strategic approach and attention to detail made a significant difference in my case.",
    name: "Guy Hawkins",
    office: "Biffco Enterprises Ltd.",
    image: cust3,
  },
  {
    id: 4,
    desc: "Highly knowledgeable and responsive. They made the legal process smooth andstress-free.",
    name: "Leslie Alexander",
    office: "Binford Ltd.",
    image: cust4,
  },
];

const Testimonials = () => {
  return (
    <section className="w-full px-5 sm:px-6 lg:px-30 py-16">
      <div className="text-center">
        <h2 className="font-semibold text-[20px] text-[#E99F69]">Testimonials</h2>
        <h3 className="font-bold text-[32px] sm:text-[40px] md:text-[48px] text-[#172423] mt-2 mb-12">
          Happy Customers
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
        {customer.map((custom) => (
          <div
            key={custom.id}
            className="flex flex-col sm:flex-row bg-orange-50 rounded-2xl border border-orange-200 p-6 sm:p-8 w-full sm:w-[500px] lg:w-[550px] shadow-sm"
          >
            <img
              src={custom.image}
              alt={custom.name}
              className="w-36 h-40 sm:w-28 sm:h-28 object-cover rounded-2xl mx-auto sm:mx-0"
            />
            <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
              <svg
                className="w-6 h-6 text-white bg-[#E99F69] rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V8a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4H5m14-6V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm0 0v2a4 4 0 0 1-4 4h-1"
                />
              </svg>

              <p className="pt-4 pb-4 text-gray-700">{custom.desc}</p>
              <h4 className="font-bold text-lg text-gray-900">{custom.name}</h4>
              <h5 className="text-sm text-gray-600">{custom.office}</h5>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-12 text-center">
        <button className="inline-flex items-center space-x-3 bg-[#E99F69] hover:bg-orange-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <img src={Call} alt="Call Icon" className="h-5 w-5" />
          <span>Get In Touch</span>
        </button>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "What types of cases do you handle?",
    answer:
      "We specialize in areas such as corporate law, intellectual property, employment law, real estate, family law, and dispute resolution.",
  },
  {
    question: "How long does it take to resolve a case?",
    answer: "The timeline varies depending on the complexity of the case.",
  },
  {
    question: "Can you help with drafting legal documents?",
    answer:
      "Yes, we offer document drafting services for contracts, agreements, and other legal paperwork.",
  },
  {
    question: "What should I bring to my first consultation?",
    answer:
      "Please bring any relevant documents, identification, and a summary of your legal issue.",
  },
  {
    question: "Do you handle cases for individuals and businesses?",
    answer:
      "Yes, we provide legal services to both individuals and businesses.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default: first item open

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h4 className="text-[#E99F69] font-bold mb-2">FAQ</h4>
        <h2 className="text-4xl font-extrabold text-gray-900">
          Insights & Clarifications
        </h2>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              <span className="text-[#E99F69]">
                {activeIndex === index ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </span>
            </div>
            {activeIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
const blogs = [
  {
    id: 1,
    name: "Business",
    des: "10 Key Questions to Ask Before Hiring a Law Firm",
    image: Business,
  },
  {
    id: 2,
    name: "Finance",
    des: "How a Law Firm Can Help Protect Your Business",
    image: Finance,
  },
  {
    id: 3,
    name: "Taxation",
    des: "The Role of a Law Firm in Resolving Disputes",
    image: Taxation,
  },
];
const Blog = () => {
  return (
    <section className="pt-10 pb-[120px]">
      <div className="text-center">
        <h2 className="text-[#E99F69] font-bold text-[20px]">Blog</h2>
        <h3 className="text-[#172423] font-bold text-[48px] pb-[50px]">
          Read From Our Blogs
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-[30px] pb-[50px] ">
        {blogs.map((ourblog) => (
          <div
            key={ourblog.id}
            className="border-b-2 border-gray-300 w-[360px] h-[470px]"
          >
            <img src={ourblog.image} />
            <h2 className="text-[#E99F69] text-[16px] font-bold pt-[30px] pb-[10px]">
              {ourblog.name}
            </h2>
            <h3 className="text-[30px] text-[#172423] font-bold">
              {ourblog.des}
            </h3>
          </div>
        ))}
      </div>
      <div className="pt-4 text-center ">
        <button className="inline-flex items-center space-x-3 bg-[#E99F69] hover:bg-orange-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <span>View All Blogs</span>
        </button>
      </div>
    </section>
  );
};
const Home = () => {
  return (
    <>
      <Hero />
      <Stripe />
      <AboutUs />
      <Choose />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <Blog />
    </>
  );
};

export default Home;
