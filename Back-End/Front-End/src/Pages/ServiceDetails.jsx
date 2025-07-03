import React from "react";
import { useParams } from "react-router-dom";

import FooterBG from "../assets/FooterBG.png";
import Commerciallaw from "../assets/services/CommercialLaw.png";
import Consultation from "../assets/services/Consultation.png";
import Call from "../assets/call-calling.png";

const serviceData = {
  "01": "Commercial Law",
  "02": "Intellectual Property",
  "03": "Employment Law",
  "04": "Real Estate Law",
  "05": "Family Law",
  "06": "Tax Law",
};

const ServiceDetails = ({ title }) => {
  return (
    <section
      className="bg-[#172423] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${FooterBG})` }}
    >
      <div className="text-center pt-[100px] pb-[100px]">
        <h2 className="font-bold text-[#E99F69] text-[20px]">
          Service Details
        </h2>
        <h3 className="font-bold text-[48px] text-[#FFFFFF]">{title}</h3>
      </div>
    </section>
  );
};
const Commercial = () => {
  return (
    <section className="bg-white text-gray-800 font-sans px-4 md:px-12 py-10 max-w-7xl mx-auto">
      {/* Top Image */}
      <div className="rounded-xl overflow-hidden mb-8">
        <img
          src={Commerciallaw}
          alt="Meeting"
          className="w-full object-cover"
        />
      </div>
      {/* Content and Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="flex-1 space-y-8">
          {/* Overview */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Overview</h2>
            <p className="text-gray-700">
              Our Commercial Law Services provide businesses with expert legal
              guidance to navigate the complexities of commercial regulations,
              contracts, and disputes. Whether you’re an established business or
              an ambitious entrepreneur, we offer tailored legal solutions to
              protect your interests and ensure compliance with business laws.
            </p>
          </div>
          {/* Services List */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Our Services Include:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>
                <strong>Business Formation & Structuring</strong> – Assistance
                with company registration, partnerships, and legal structuring.
              </li>
              <li>
                <strong>Contracts & Agreements</strong> – Drafting, reviewing,
                and negotiating contracts to safeguard your business interests.
              </li>
              <li>
                <strong>Corporate Compliance</strong> – Ensuring adherence to
                corporate laws, regulations, and governance policies.
              </li>
              <li>
                <strong>Mergers & Acquisitions</strong> – Legal support for
                business mergers, acquisitions, and strategic partnerships.
              </li>
              <li>
                <strong>Employment Law</strong> – Guidance on employment
                contracts, workplace policies, and dispute resolution.
              </li>
              <li>
                <strong>Intellectual Property Protection</strong> – Safeguarding
                trademarks, copyrights, and patents.
              </li>
              <li>
                <strong>Dispute Resolution & Litigation</strong> –
                Representation in commercial disputes, mediation, and
                arbitration.
              </li>
            </ul>
          </div>
          {/* Our Approach */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
            <p className="text-gray-700">
              With a deep understanding of business law and industry-specific
              regulations, our legal team is committed to helping businesses
              create smooth, sustainable, risk-free, and achievement-driven
              operations.
            </p>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Why Choose Us?</h3>
            <p className="text-gray-700">
              With extensive experience in commercial law, our team provides
              in-depth knowledge and insights tailored to your specific needs.
              Our client-centered approach ensures that your legal matters are
              always a top priority.
              <br />
              <br />
              Whether you’re starting a business, expanding your operations,
              entering into a partnership, or resolving a dispute, we are here
              to protect your interests and provide comprehensive legal support
              every step of the way.
              <br />
              <br />
              Our team offers rapid, practical, and result-driven assistance
              across various jurisdictions by combining commercial insight with
              legal precision. With our comprehensive service, you can focus on
              expanding your business while we handle the legal complexities,
              ensuring long-term success and protection.
            </p>
          </div>
        </div>
        {/* right sidebar */}
        <div className="bg-[#f4ede8] rounded-3xl h-[620px] ">
          <div className="m-5">
            <div>
              <img src={Consultation} alt="consultation" className="pb-[30px]" />
            </div>
            <div>
              <h2 className="font-bold text-[#172423] text-[20px]">Get Free Consultation</h2>
              <p className="text-[#172423] text-[16px] pt-[10px]">
                Unlock a free consultation. Our team is <br /> ready to discuss
                your legal matters and <br />
                provide valuable insights.
              </p>
              <div className="flex pt-[31px] gap-5">
                <div>
                  <button className="inline-flex pt-3 text-center items-center space-x-3 bg-[#E99F69] hover:bg-orange-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <img src={Call} alt="Call Icon" className="h-5 w-5" />
                  </button>
                </div>
                <div>
                  <h2 className="font-bold text-[#172423] text-[[16px]">Call Us</h2>
                  <p>+91 954468870</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesDetails = () => {
  const { id } = useParams();
  const title = serviceData[id] || "Services Not Found";

  const renderServiceComponent = () => {
    switch (id) {
      case "01":
        return <Commercial />;
      default:
        return (
          <div className="text-center text-red-500 my-10">
            No content available for this service.
          </div>
        );
    }
  };
  return (
    <>
      <ServiceDetails title={title} />
      {renderServiceComponent()}
    </>
  );
};
export default ServicesDetails;
