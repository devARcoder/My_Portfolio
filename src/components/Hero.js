import React from "react";
import reactJS from "../Assets/reactjs.png";
import javascript from "../Assets/javascript.png";
import tailwindcss from "../Assets/tailwindcss.png";
import bootstrap from "../Assets/bootstrap.png";
import htmlcss from "../Assets/htmlcss.png";
const Hero = () => {
  return (
    <>
      <div className="bg-black text-white flex flex-col items-center py-24 h-screen text-center md:py-20">
        <div className="mx-14">
          <h1 className="text-4xl font-extrabold text-white mx-10 md:text-6xl md:text-white">
            I'm Abdur Razzaq
          </h1>
          <h5 className="text-2xl font-extrabold text-green-500 md:text-6xl md:text-green-500 md:py-4">
            The Frontend Developer
          </h5>
          <p className="text-gray-300 text-[18px] text-bold">
            A Web Developer specializing in creating stunning websites with
            React.js, Tailwind CSS, and JavaScript.
          </p>
        </div>
        <div className="flex spce-x-6 py-12 md:flex md:space-x-6 md:py-8">
          <h1 className="text-white font-extrabold text-3xl py-2">LinkedIn</h1>

          <div className="flex flex-col">
            <span className="text-2xl text-green-500 px-4">★★★★★</span>
            <p className="text-[12px] font-extrabold">873 Connections</p>
          </div>
        </div>
        <button className="bg-green-500 text-[18px] text-white px-6 py-2 rounded-md hover:bg-black hover:border hover:border-white md:hidden">
          Resume &rarr;
        </button>
        <marquee
          class="marq mt-12"
          direction="left"
          behavior="scroll"
          scrollamount="18"
          loop=""
        >
          <div className="flex space-x-8 justify-center items-center md:flex md:space-x-36">
            <img className="w-20 h-20" src={reactJS} alt="" />
            <img className="w-20 h-20" src={javascript} alt="" />
            <img className="w-20 h-16" src={tailwindcss} alt="" />
            <img className="w-20 h-20" src={bootstrap} alt="" />
            <img className="w-20 h-20" src={htmlcss} alt="" />
          </div>
        </marquee>
      </div>
    </>
  );
};

export default Hero;
