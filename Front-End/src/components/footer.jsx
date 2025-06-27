import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import Call from "../assets/call-calling.png";
import FooterBG from "../assets/FooterBG.png";

// const Footer = () => {
//   return (
//     <footer>
//       <div
//         className="text-center mt-[120px] pb-[100px] bg-[#172423] overflow-hidden bg-cover bg-center"
//         style={{ backgroundImage: `url(${FooterBG})` }}
//       >
//         <h2 className="text-[#E99F69] mt-[100px] font-bold text-[20px]">
//           Reach out
//         </h2>
//         <h3 className="font-bold text-[32px] md:text-[48px] text-white px-4">
//           Our experienced attorney are here <br className="hidden md:block" /> to answer any questions
//         </h3>
//         <div className="pt-4 text-center mt-[50px]">
//           <button className="inline-flex items-center space-x-3 bg-[#E99F69] hover:bg-orange-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
//             <img src={Call} alt="Call Icon" className="h-5 w-5" />
//             <span>Get In Touch</span>
//           </button>
//         </div>
//       </div>

//       <div className="bg-white">
//         <div className="max-w-screen-2xl mx-auto px-4 sm:px-5 lg:px-1 pt-16 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-gray-800">
//           <div>
//             <img src={logo} alt="Company Logo" className="h-10 w-auto rounded" />
//             <p className="text-[16px] mt-6">
//               Our law firm combines legal expertise with personalized solutions
//             </p>
//           </div>

//           <div>
//             <h3 className="text-[20px] font-bold pb-4">Menu</h3>
//             <ul className="space-y-2">
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/AboutUs">About Us</Link></li>
//               <li><Link to="/Services">Services</Link></li>
//               <li><Link to="/ContactUs">Contact Us</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-[20px] font-bold pb-4">Other Pages</h3>
//             <ul className="space-y-2">
//               <li><Link to="/Blog">Blog</Link></li>
//               <li><Link to="/error">Error 404</Link></li>
//               <li><Link to="/Term&Condition">Terms & Conditions</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-[20px] font-bold pb-4">Follow Me</h3>
//             <ul className="space-y-2">
//               <li><a href="#">LinkedIn</a></li>
//               <li><a href="#">Instagram</a></li>
//               <li><a href="#">X</a></li>
//             </ul>
//           </div>
//         </div>

//         <div className="text-start pl-46 text-sm py-4 border-t border-gray-200 px-4">
//           © 2024 <span className="text-[#ec9f6a]">Lawcase</span> Template
//         </div>
//       </div>
//     </footer>
//   );
// };

// import { Link } from "react-router-dom";
// import logo from "../assets/Logo.png";
// import FooterBG from "../assets/footer-bg.jpg";
// import Call from "../assets/call-icon.png"; // update path accordingly

const Footer = () => {
  return (
    <footer>
      {/* Top Call-to-Action */}
      <div
        className="text-center pt-4 mt-20 pb-24 bg-[#172423] bg-cover bg-center"
        style={{ backgroundImage: `url(${FooterBG})` }}
      >
        <h2 className="text-[#E99F69] mt-24 font-bold text-lg sm:text-xl">
          Reach out
        </h2>
        <h3 className="font-bold text-2xl sm:text-4xl text-white px-4 mt-3 leading-snug">
          Our experienced attorneys are here <br className="hidden md:block" />{" "}
          to answer any questions
        </h3>

        <div className="pt-6 text-center">
          <button className="inline-flex items-center space-x-3 bg-[#E99F69] hover:bg-orange-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <img src={Call} alt="Call Icon" className="h-5 w-5" />
            <span>Get In Touch</span>
          </button>
        </div>
      </div>

      {/* Bottom Grid Footer */}
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 py-12">
          {/* Main Grid - 2 columns on tablet, 4 on large screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-800">
            {/* Logo & Description */}
            <div>
              <img
                src={logo}
                alt="Company Logo"
                className="h-10 w-auto rounded"
              />
              <p className="text-sm mt-4 max-w-xs">
                Our law firm combines legal expertise with personalized
                solutions to protect your rights and achieve your goals.
              </p>
            </div>

            {/* Horizontal Links Section for Small Screens */}
            <div className="sm:col-span-2 lg:col-span-3">
              <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-6">
                {/* Menu */}
                <div>
                  <h3 className="text-base md:font-bold font-bold pb-3">
                    Menu
                  </h3>
                  <ul className="space-y-1.5 text-sm">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/AboutUs">About Us</a>
                    </li>
                    <li>
                      <a href="/Services">Services</a>
                    </li>
                    <li>
                      <a href="/ContactUs">Contact Us</a>
                    </li>
                  </ul>
                </div>

                {/* Other Pages */}
                <div>
                  <h3 className="text-base font-bold pb-3">Other Pages</h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="/Blog">Blog</a>
                    </li>
                    <li>
                      <a href="/error">Error 404</a>
                    </li>
                    <li>
                      <a href="/Term&Condition">Terms & Conditions</a>
                    </li>
                  </ul>
                </div>

                {/* Follow Me */}
                <div>
                  <h3 className="text-base font-bold pb-3">Follow Me</h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="#">LinkedIn</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                    <li>
                      <a href="#">X</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
        </div>
      </div>
      <div className="lg:px-60 text-sm pb-5 pt-5 border-t border-gray-200">
        © 2024 <span className="text-[#ec9f6a] font-bold">Lawcase</span>{" "}
        Template. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
