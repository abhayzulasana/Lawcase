// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
// } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/Logo.png";

// // Navigation links
// const navigation = [
//   { name: "Home", to: "/" },
//   { name: "About Us", to: "/AboutUs" },
//   { name: "Services", to: "/services" },
//   { name: "Blog", to: "/Blog" },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
//   const location = useLocation();

//   return (
//     <Disclosure as="nav" className="bg-white">
//       <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-9">
//         <div className="relative flex h-[88px] items-center justify-between">
//           {/* Mobile menu button */}
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon
//                 aria-hidden="true"
//                 className="block size-6 group-data-open:hidden"
//               />
//               <XMarkIcon
//                 aria-hidden="true"
//                 className="hidden size-6 group-data-open:block"
//               />
//             </DisclosureButton>
//           </div>

//           {/* Logo */}
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex shrink-0 items-center">
//               <img
//                 className="h-10 w-auto rounded"
//                 src={logo}
//                 alt="Company Logo"
//               />
//             </div>
//           </div>

//           {/* Desktop Navigation + Contact */}
//           <div className="flex items-center space-x-4">
//             <div className="hidden sm:flex space-x-0">
//               {navigation.map((item) => {
//                 const isActive =
//                   item.to === "/services"
//                     ? location.pathname.startsWith("/services")
//                     :item.to === "/Blog"
//                     ?location.pathname.startsWith("/Blog")
//                     : location.pathname === item.to;

//                 return (
//                   <Link
//                     key={item.name}
//                     to={item.to}
//                     className={classNames(
//                       isActive
//                         ? "text-orange-500 font-bold"
//                         : "text-black hover:bg-gray-100 hover:text-black",
//                       "rounded-md px-[50px] py-2 text-[16px] font-medium"
//                     )}
//                   >
//                     {item.name}
//                   </Link>
//                 );
//               })}
//             </div>

//             {/* Contact Us Button */}
//             <Link
//               to="/ContactUs"
//               className="rounded-full bg-[#E99F69] px-6 border-black border-1 py-3 text-[16px] font-bold text-white hover:opacity-90"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation Panel */}
//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pt-2 pb-3">
//           {navigation.map((item) => {
//             const isActive =
//               item.to === "/services"
//                 ? location.pathname.startsWith("/services")
//                 : location.pathname === item.to;

//             return (
//               <DisclosureButton
//                 key={item.name}
//                 as={Link}
//                 to={item.to}
//                 className={classNames(
//                   isActive
//                     ? "text-orange-500 font-bold"
//                     : "text-black hover:bg-gray-100 hover:text-black",
//                   "block rounded-md px-3 py-2 text-base font-medium"
//                 )}
//               >
//                 {item.name}
//               </DisclosureButton>
//             );
//           })}

//           <DisclosureButton
//             as={Link}
//             to="/ContactUs"
//             className="block rounded-md bg-[#E99F69] px-3 py-2 text-base font-medium text-white hover:opacity-90"
//           >
//             Contact Us
//           </DisclosureButton>
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   );
// }

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";

// Navigation links
const navigation = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/AboutUs" },
  { name: "Services", to: "/services" },
  { name: "Blog", to: "/Blog" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-9">
        <div className="relative flex h-[88px] items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-black focus:outline-none">
              <Bars3Icon className="block h-6 w-6 ui-not-open:block ui-open:hidden" />
              <XMarkIcon className="hidden h-6 w-6 ui-open:block" />
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Nav + Contact */}
          <div className="hidden sm:flex items-center space-x-9">
            <div className="flex space-x-2 lg:space-x-20">
              {navigation.map((item) => {
                const isActive =
                  item.to === "/services"
                    ? location.pathname.startsWith("/services")
                    : item.to === "/Blog"
                    ? location.pathname.startsWith("/Blog")
                    : location.pathname === item.to;

                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      isActive
                        ? "text-orange-500 font-bold"
                        : "text-black hover:text-orange-500",
                      "px-4 py-2 text-[16px] font-medium transition"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <Link
              to="/ContactUs"
              className="ml-4 rounded-full bg-[#E99F69] px-5 py-2.5 text-white font-bold hover:opacity-90 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Nav Links */}
      <DisclosurePanel className="sm:hidden bg-white border-t border-gray-200">
        <div className="space-y-1 px-4 pt-4 pb-3">
          {navigation.map((item) => {
            const isActive =
              item.to === "/services"
                ? location.pathname.startsWith("/services")
                : location.pathname === item.to;

            return (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.to}
                className={classNames(
                  isActive
                    ? "text-orange-500 font-bold"
                    : "text-black hover:text-orange-500",
                  "block px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            );
          })}

          <DisclosureButton
            as={Link}
            to="/ContactUs"
            className="block w-full rounded-md bg-[#E99F69] text-white text-center py-2 mt-2 font-semibold hover:opacity-90 transition"
          >
            Contact Us
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
