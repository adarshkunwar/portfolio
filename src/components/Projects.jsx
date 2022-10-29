import React from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
const Projects = () => {
  return (
    <div className="flex h-screen items-center">
      <div className="text-5xl">
        <AiFillLeftCircle />
      </div>
      <div className="flex">
        {/* projects- skills used */}
        <div className="bg-slate-200 w-[28rem] border-r-2 border-black">
          hello
        </div>
        {/* projects- projects change */}
        <div className="flex items-center gap-5 p-5 border-r-2">
          <div className="w-[27rem] h-[27rem] bg-slate-200"></div>
          <div className="flex flex-col gap-5">
            <div className="w-32 h-32 bg-slate-200"></div>
            <div className="w-32 h-32 bg-slate-200"></div>
            <div className="w-32 h-32 bg-slate-200"></div>
          </div>
        </div>
        {/* text */}
        <div className=" w-[32rem]"></div>
      </div>
      <div className="text-5xl">
        <AiFillRightCircle />
      </div>
    </div>
  );
};

export default Projects;
