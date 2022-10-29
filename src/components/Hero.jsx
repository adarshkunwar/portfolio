import React from "react";
import img from "../images/profile.png";
const Hero = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="-ml-80">
        <img src={img} alt="" className="w-[45rem] h-[45rem]" />
      </div>
      <div className="right text-xl pl-20">
        <div className="text-7xl">
          <span className="text-secondary hover:text-yellow-900  hover:mb-2 cursor-pointer">
            H
          </span>
          <span className="hover:text-yellow-900">e</span>
          <span className="hover:text-yellow-900">l</span>
          <span className="hover:text-yellow-900">l</span>
          <span className="hover:text-yellow-900">o</span>,
        </div>
        <div className="text-4xl mt-10 font-bold">
          <span className="hover:text-yellow-900">I</span>
          <span className="hover:text-yellow-900"> a</span>
          <span className="hover:text-yellow-900">m</span>
        </div>
        <div className="text-8xl">
          <span className="text-secondary hover:text-yellow-900">A</span>
          <span className="hover:text-yellow-900">d</span>
          <span className="hover:text-yellow-900">a</span>
          <span className="hover:text-yellow-900">r</span>
          <span className="hover:text-yellow-900">s</span>
          <span className="hover:text-yellow-900">h</span>
          <span className="text-secondary hover:text-yellow-900"> K</span>
          <span className="hover:text-yellow-900">u</span>
          <span className="hover:text-yellow-900">n</span>
          <span className="hover:text-yellow-900">w</span>
          <span className="hover:text-yellow-900">a</span>
          <span className="hover:text-yellow-900">r</span>
        </div>

        <div className="text-xl mt-20">
          <div>What would you like to know</div>
          <div className="flex gap-16 mt-5">
            <button className="border w-40 rounded-lg bg-secondary text-white hover:bg-transparent active:pt-2 active:shadow-none hover:text-black shadow-md py-2">
              hire me!
            </button>
            <button className="border w-80 rounded-lg bg-secondary text-white hover:bg-transparent active:pt-2 active:shadow-none hover:text-black shadow-md py-2">
              Know more about me?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
