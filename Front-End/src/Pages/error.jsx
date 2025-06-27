  import React from "react";
  import errori from "../assets/404.svg";
  import { Link } from "react-router-dom";
  import Home from "./Home";

  const Error = () => {
    return (
      <section className="h-[687px] bg-[#f9ede5]">
        <div className="pt-[120px] pb-[120px]">
          <div className=" flex justify-center">
            <img src={errori} alt="not found" className=" flex " />
          </div>
          <h2 className="text-[48px] text-[#172423] font-bold text-center">
            Looks like here is nothing
          </h2>
          <Link to="/">
          <div className="pt-4 text-center ">
            <button className="inline-flex items-center space-x-3 bg-[#E99F69] hover:bg-orange-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <span>Back To Home</span>
            </button>
          </div>
          </Link>
        </div>
      </section>
    );
  };

  export default Error;
