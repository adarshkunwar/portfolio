import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import About from "./About";
import Extras from "./Extras";
import Hero from "./Hero";
import NoPage from "./NoPage";
import Projects from "./Projects";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [tab, setTab] = useState("hero");
  let activeTab;
  if (tab === "hero") activeTab = <Hero />;
  if (tab === "about") activeTab = <About />;
  if (tab === "extra") activeTab = <Extras />;
  if (tab === "project") activeTab = <Projects />;
  return (
    <>
      <div className="absolute">
        <div className={`px-5 py-5 text-2xl select-none relative }`}>
          <div>
            <div
              className={`${menu ? "hidden" : "block"} `}
              onClick={() => setMenu(true)}
            >
              <AiOutlineMenu />
            </div>
            <div className={` list-none z-10 ${menu ? "block" : "hidden"} `}>
              <li
                className="mb-3 hover:font-bold px-2 w-fit text-4xl"
                onClick={() => setMenu(false)}
              >
                X
              </li>
              <li
                className="w-fit hover:mb-3 hover:font-bold hover:scale-110 transition duration-300"
                onClick={() => setTab("hero")}
              >
                Home
              </li>
              <li
                className="w-fit hover:pb-3 hover:font-bold hover:scale-110 hover:pt-3 transition duration-300"
                onClick={() => setTab("about")}
              >
                About
              </li>
              <li
                className="w-fit hover:pb-3 hover:font-bold hover:scale-110 hover:pt-3 transition duration-300"
                onClick={() => setTab("project")}
              >
                Projects
              </li>
              <li className="w-fit hover:pb-3 hover:font-bold hover:scale-110 hover:pt-3 transition duration-300">
                Blogs
              </li>
              <li
                className="w-fit hover:pb-3 hover:font-bold hover:scale-110 hover:pt-3 transition duration-300"
                onClick={() => setTab("extra")}
              >
                Extra
              </li>
            </div>
          </div>
          <div
            className={`w-[28rem] h-[28rem] rounded-full bg-orange-300  transition-all duration-500 ${
              menu ? "-ml-[15rem] -mt-[24rem]" : "-ml-[25rem] -mt-[27rem]"
            }`}
          ></div>
        </div>
      </div>
      {/* {activeTab} */}
      <NoPage />
    </>
  );
};

export default Nav;
