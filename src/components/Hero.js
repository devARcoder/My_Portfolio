import React from "react";
import banner from '../Assets/react-banner.png'
const Hero = () => {
  return (
    <>
     <div className="flex flex-col justify-center md:flex md:flex-row md:justify-between">
      <img className="md:order-last md:w-3/4" src={banner} alt="" />
      <div className="flex flex-col justify-center items-center text-center mx-4 py-4 space-y-2">
      <h1 className="text-4xl font-bold text-gray-800">Hi, I'm Abdur Razzaq</h1>
      <p className="text-[20px] text-semibold">A Web Developer specializing in creating stunning websites with React.js, Tailwind CSS, and JavaScript.</p>
      <div className="flex space-x-4 py-4">
        <button className="text-[14px] bg-black text-white p-3 rounded-lg">View Resume</button>
        <button className="text-[14px] bg-black text-white p-3 rounded-lg">Contact Me</button>
      </div>
      </div>
     </div>
    </>
  );
};

export default Hero;
