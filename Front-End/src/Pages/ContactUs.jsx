import React from "react";
import { LuSend } from "react-icons/lu";
import { BiPhoneCall } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";

import Contact from "../assets/Contact/ContactUs.png";
import Address from "../assets/Contact/Address.png";
import ConCall from "../assets/Contact/ConCall.png";
import Email from "../assets/Contact/Email.png";

// const ContactUs = () => {
//   return (
//     <div className=" ">
//       <div className="flex">
//         <div>
//           <img src={Contact} className="w-[960px] h-[870px]" />
//         </div>

//         <div className="bg-[#172423] w-[945px]">
//           <div className="p-35">
//             <div>
//               <h2 className="text-[#E99F69] text-[20px] font-bold">
//                 ContactUs
//               </h2>
//               <h3 className="text-white text-[48px] font-bold pt-[10px] pb-[30px]">
//                 Get In Touch
//               </h3>
//             </div>
//             <div className="">
//               <input
//                 id="Name"
//                 name="Name"
//                 type="text"
//                 autoComplete="Full-Name"
//                 placeholder="Name"
//                 className="bg-[#ffffff1d] p-5 w-full text=[16px] placeholder:text-[#c49b9bcf] rounded-2xl"
//               />
//             </div>
//             <div className="pt-[30px] pb-[30px]">
//               <input
//                 id="Email"
//                 name="Email"
//                 type="text"
//                 autoComplete="Email"
//                 placeholder="Email"
//                 className="bg-[#ffffff1d] p-5 w-full text=[16px] placeholder:text-[#c49b9bcf] rounded-2xl "
//               />
//             </div>
//             <div>
//               <textarea
//                 id="Name"
//                 name="Name"
//                 type="text"
//                 autoComplete="Full-Name"
//                 placeholder="Enter a Message"
//                 rows={4}
//                 className="bg-[#ffffff1d] p-5 w-full text=[16px] placeholder:text-[#c49b9bcf] rounded-2xl"
//               />
//             </div>
//             <div className="pt-[30px]  text-center ">
//               <button className=" w-full text-center justify-center  bg-[#E99F69] hover:bg-orange-300 flex font-bold text-white px-8 py-4 rounded-full  text-[18px] transition-all duration-300 hover:scale-105 hover:shadow-lg">
//                 <LuSend className="pt-1 w-10 text-2xl" />
//                 <span>Send Message</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center gap-30 pt-[120px]">
//         <div
//           className="w-[360px] h-[410px] bg-cover bg-center  text-black"
//           style={{ backgroundImage: `url(${Address})` }}
//         >
//           <div className="pt-[230px] justify-center flex">
//             <div className="p-5  bg-white bg-opacity-80 h-[160px] w-[320px] rounded-lg">
//               <div className="bg-[#E99F69] text-white rounded-full w-[44px] h-[44px] flex justify-center items-center">
//                 <LuMapPin />
//               </div>
//               <h2 className="pt-[20px] pb-[10px] text-[18px] font-bold">
//                 Address
//               </h2>
//               <p>Royal Ln. Mesa, New Jersey 45463</p>
//             </div>
//           </div>
//         </div>

//         <div
//           className="w-[360px] h-[410px] bg-cover bg-center text-black"
//           style={{ backgroundImage: `url(${ConCall})` }}
//         >
//           <div className="pt-[230px] justify-center flex">
//             <div className="p-4 bg-white bg-opacity-80 h-[160px] w-[320px] rounded-lg">
//               <div className="bg-[#E99F69] text-white rounded-full w-[44px] h-[44px] flex justify-center items-center">
//                 <BiPhoneCall />
//               </div>
//               <h2 className="pt-[20px] pb-[10px] text-[18px] font-bold">
//                 Call
//               </h2>
//               <p>+91 95744 68870</p>
//             </div>
//           </div>
//         </div>

//         <div
//           className="w-[360px] h-[410px] bg-cover bg-center text-black"
//           style={{ backgroundImage: `url(${Email})` }}
//         >
//           <div className="pt-[230px] justify-center flex">
//             <div className="p-4 bg-white bg-opacity-80 h-[160px] w-[320px] rounded-lg">
//               <div className="bg-[#E99F69] text-white rounded-full w-[44px] h-[44px] flex justify-center items-center">
//                 <HiOutlineMail />
//               </div>
//               <h2 className="pt-[20px] pb-[10px] text-[18px] font-bold">
//                 Email
//               </h2>
//               <p>uiuxocean@gmail.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
const ContactUs = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-auto">
          <img
            src={Contact}
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full bg-[#0c1c1a] lg:w-1/2 flex items-center justify-center px-6 sm:px-10 py-16">
          <form className="w-full max-w-md space-y-6">
            <div>
              <h2 className="text-[#E99F69] text-sm sm:text-base font-bold">
                ContactUs
              </h2>
              <h3 className="text-white text-3xl sm:text-4xl font-bold pt-2">
                Get In Touch
              </h3>
            </div>

            <input
              type="text"
              placeholder="Name"
              className="w-full bg-[#2c3b3a] text-white placeholder:text-gray-400 p-4 rounded-xl"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#2c3b3a] text-white placeholder:text-gray-400 p-4 rounded-xl"
            />
            <textarea
              placeholder="Enter a Message"
              rows={4}
              className="w-full bg-[#2c3b3a] text-white placeholder:text-gray-400 p-4 rounded-xl"
            />

            <button
              type="submit"
              className="w-full bg-[#E99F69] hover:bg-orange-400 text-white font-semibold flex items-center justify-center gap-2 px-6 py-4 text-base sm:text-lg rounded-full transition duration-300 hover:scale-105"
            >
              <LuSend className="text-xl" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-50 px-5 pt-20">
        {/* Address Card */}
        <div
          className="h-[410px] bg-no-repeat bg-cover text-black rounded-2xl"
          style={{ backgroundImage: `url(${Address})` }}
        >
          <div className="flex justify-center pt-[230px]">
            <div className="bg-white bg-opacity-80 rounded-lg p-5 w-[90%]">
              <div className="bg-[#E99F69] text-white rounded-full w-[44px] h-[44px] flex justify-center items-center">
                <LuMapPin />
              </div>
              <h2 className="pt-5 pb-2 text-lg font-bold">Address</h2>
              <p className="text-sm">Royal Ln. Mesa, New Jersey 45463</p>
            </div>
          </div>
        </div>

        {/* Call Card */}
        <div
          className="h-[410px] bg-no-repeat bg-cover text-black rounded-2xl"
          style={{ backgroundImage: `url(${ConCall})` }}
        >
          <div className="flex justify-center pt-[230px]">
            <div className="bg-white bg-opacity-80 rounded-lg p-5 w-[90%]">
              <div className="bg-[#E99F69] text-white rounded-full w-[44px] h-[44px] flex justify-center items-center">
                <BiPhoneCall />
              </div>
              <h2 className="pt-5 pb-2 text-lg font-bold">Call</h2>
              <p className="text-sm">+91 95744 68870</p>
            </div>
          </div>
        </div>

        {/* Email Card */}
        <div
          className="h-[410px] bg-no-repeat bg-cover text-black rounded-2xl"
          style={{ backgroundImage: `url(${Email})` }}
        >
          <div className="flex justify-center pt-[230px]">
            <div className="bg-white bg-opacity-80 rounded-lg p-5 w-[90%]">
              <div className="bg-[#E99F69] text-white rounded-full w-[44px] h-[44px] flex justify-center items-center">
                <HiOutlineMail />
              </div>
              <h2 className="pt-5 pb-2 text-lg font-bold">Email</h2>
              <p className="text-sm">uiuxocean@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
