import React from "react";
import { useParams } from "react-router-dom";

import FooterBG from "../assets/FooterBG.png";
import Family2 from "../assets/Blog/Family2.png";
import Business from "../assets/home/blog/business.png";
import Finance from "../assets/home/blog/finance.png";
import Taxation from "../assets/home/blog/taxation.png";
import Commercial from "../assets/Blog/Commercial.png";


const blogContentData = {
  1: {
    contentAvailable: false,
    name: "Business",
    des: "10 Key Questions to Ask Before Hiring a Law Firm",
  },
  2: {
    contentAvailable: false,
    name: "Finance",
    des: "How a Law Firm Can Help Protect Your Business",
  },
  3: {
    contentAvailable: false,
    name: "Taxation",
    des: "The Role of a Law Firm in Resolving Disputes",
  },
  4: {
    contentAvailable: true,
    name: "Commercial",
    des: "The Role of a Commercial Law Firm",
    contentImage: Commercial,
  },
  5: {
    contentAvailable: false,
    name: "Family",
    des: "Key Legal Challenges Businesses Face",
  },
  6: {
    contentAvailable: false,
    name: "Employment",
    des: "Choosing the Right Law Firm for Your Business",
  },
};

const BlogsDetailsHero = ({ des }) => {
  return (
    <section
      className="bg-[#172423] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${FooterBG})` }}
    >
      <div className="text-center pt-[100px] pb-[100px]">
        <h2 className="font-bold text-[#E99F69] text-[20px]">Blog Details</h2>
        <h3 className="font-bold text-[48px] text-[#FFFFFF]">{des}</h3>
        <p className="text-white">21 Aug, 2025</p>
      </div>
    </section>
  );
};

const CommercialLawFirm = () => {
  return (
    <div className="bg-white text-[#1f2937]  font-sans px-4 md:px-12 xl:px-45 py-12 space-y-12">
      {/* Top Image */}
      <img
        src={Family2}
        alt="Lawyer in courtroom"
        className="  w-[1500px] h- rounded-lg "
      />

      {/* Main Content */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          The Role of a Commercial Law Firm
        </h1>
        <p>
        In today’s fast-paced business world, legal challenges can arise at any moment. Whether it’s contract disputes, regulatory compliance, or intellectual property protection, businesses need expert legal guidance to operate smoothly and mitigate risks. This is where a commercial law firm plays a crucial role. These firms specialize in providing businesses with the legal expertise necessary to navigate complex regulations, protect their interests, and ensure compliance with industry standards.        </p>

        <h2 className="text-2xl font-semibold mt-8">Understanding Commercial Law Firms</h2>
        <p>
        A commercial law firm focuses on legal matters related to businesses, corporations, and commerce. They provide a range of services, including contract drafting, dispute resolution, corporate governance, and regulatory compliance. Their primary objective is to help businesses avoid legal pitfalls while ensuring their operations are legally sound.

Unlike general law firms, commercial law firms specialize in business-related legal matters. This specialization allows them to offer tailored solutions that address the unique challenges faced by companies across various industries. Whether a business is a startup or a multinational corporation, commercial lawyers ensure that it remains compliant with the ever-changing legal landscape.        </p>

        <h2 className="text-2xl font-semibold mt-8">Key Roles of a Commercial Law Firm</h2>
        <ol className="list-decimal text-[#172423] list-inside space-y-4">
          <li>
            <strong>Formation and Structure of a Business</strong><br/><br/> One of the first steps in starting a business is choosing the right legal structure. A commercial law firm helps entrepreneurs decide whether to establish their business as a sole proprietorship, partnership, limited liability company (LLC), or corporation. Each structure has its legal implications, tax obligations, and liabilities. Having the right structure in place can protect business owners from unnecessary risks and ensure long-term stability.
          </li>
          <li>
            <strong>Contract Drafting and Negotiation<br/><br/></strong> Contracts are the backbone of any business. From supplier agreements to employment contracts, businesses rely on legally binding documents to outline their rights and responsibilities. A commercial law firm drafts, reviews, and negotiates contracts to ensure they are clear, enforceable, and beneficial to their clients. Well-structured contracts prevent misunderstandings, minimize disputes, and provide legal protection in case of a disagreement.
          </li>
          <li>
            <strong>Regulatory Compliance and Corporate Governance<br/><br/></strong> Every business must comply with local, national, and international regulations. Failure to do so can result in fines, lawsuits, or even business closure. A commercial law firm ensures that businesses adhere to the necessary legal requirements, from tax laws and employment regulations to environmental policies and industry-specific mandates. Additionally, they help companies establish corporate governance structures, ensuring ethical business practices and accountability.
          </li>
          <li>
            <strong>Intellectual Property Protection<br/><br/></strong> In today’s digital age, protecting intellectual property (IP) is more important than ever. Businesses invest heavily in trademarks, patents, copyrights, and trade secrets, making them valuable assets. A commercial law firm helps clients register and enforce their IP rights, preventing competitors from using or misappropriating their creations. Protecting intellectual property not only secures a company’s brand identity but also enhances its market value.
          </li>
          <li>
            <strong>Dispute Resolution and Litigation<br/><br/></strong> Despite taking preventive measures, legal disputes can still arise. Whether it’s a breach of contract, employment dispute, or shareholder conflict, a commercial law firm provides legal representation to resolve issues efficiently. They handle dispute resolution through negotiation, mediation, arbitration, or litigation, depending on the situation. By having legal experts on their side, businesses can avoid prolonged court battles and financial losses.
          </li>
          <li>
            <strong>Mergers, Acquisitions, and Business Transactions<br/><br/></strong> Mergers and acquisitions (M&A) are complex processes that require careful legal oversight. A commercial law firm facilitates business transactions by conducting due diligence, structuring deals, and ensuring compliance with legal and financial regulations. Their role is to protect their client’s interests, minimize risks, and ensure a smooth transition during business expansions, acquisitions, or sales.
          </li>
          <li>
            <strong>Employment Law and Workplace Policies<br/><br/></strong> A company’s relationship with its employees is governed by various labor laws. A commercial law firm assists businesses in creating employment contracts, workplace policies, and compliance procedures. They also help in handling disputes related to wrongful termination, discrimination, harassment, and wage issues. Proper legal guidance ensures that companies maintain fair employment practices and avoid potential lawsuits.
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8">Conclusion</h2>
        <p>
        A commercial law firm is a valuable asset for any business, providing crucial legal support in various areas such as contracts, compliance, dispute resolution, and intellectual property protection. Whether a business is just starting or expanding, having expert legal guidance ensures smooth operations and long-term success. By partnering with a reliable commercial law firm, businesses can navigate the complex legal landscape with confidence, knowing they are legally protected at every step.        </p>
      </div>

      {/* Related Blogs Section */}
      {/* Related Blogs Section */}
      <div className="pt-16 mt-12">
        <h2 className="font-bold text-center text-[#E99F69] text-lg sm:text-xl">Related Blogs</h2>
        <h3 className="text-center text-2xl sm:text-4xl font-bold mb-8 text-[#172423]">
          Read From Our Blogs
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "10 Key Questions to Ask Before Hiring a Law Firm",
              category: "Business",
              image: Business,
            },
            {
              title: "How a Law Firm Can Help Protect Your Business",
              category: "Finance",
              image: Finance,
            },
            {
              title: "The Role of a Law Firm in Resolving Disputes",
              category: "Taxation",
              image: Taxation,
            },
          ].map((blog, index) => (
            <div
              key={index}
              className="border-b-2 border-gray-300 w-full max-w-sm mx-auto sm:mx-0 h-auto bg-white shadow rounded overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-[220px] w-full object-cover"
              />
              <div className="p-4 space-y-2">
                <span className="text-sm font-medium text-[#E99F69]">{blog.category}</span>
                <h4 className="text-lg font-bold text-[#172423]">{blog.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogDetails =() =>{
  const {id} = useParams();
  const blog=blogContentData[id];

  if(!blog){
    return<div className="text-center py-20">Blog Not Found</div>
  }
    return(
        <>
        <BlogsDetailsHero des={blog.des}/>
        {blog.contentAvailable && <CommercialLawFirm />}
        </>
    );
}

export default BlogDetails;