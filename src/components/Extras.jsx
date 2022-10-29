import React from "react";

const Extras = () => {
  return (
    <div className="flex justify-center gap-40 h-screen items-center">
      <div
        className="bg-orange-400 px-20 py-5 rounded-full hover:shadow-lg cursor-pointer hover:scale-105 transition duration-300 active:scale-95 select-none text-4xl"
        onContextMenu={false}
      >
        My stories
      </div>
      <div className="bg-purple-400 px-14 py-4 rounded-full hover:shadow-lg cursor-pointer hover:-mt-5 transition duration-500 active:scale-150 text-4xl">
        My Games
      </div>
    </div>
  );
};

export default Extras;
