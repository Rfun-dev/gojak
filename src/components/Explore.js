import React from "react";

function Explore({text1,text2}) {
  return (
    <div className="mt-16 flex flex-col px-40 pb-36 pt-20 items-center justify-center">
      <h1 className="text-white text-5xl font-bold text-center">
        {text1}
        <br />
        {text2}
      </h1>
      <button className="px-5 py-3 rounded-full bg-hijau text-white mt-8 font-semibold drop-shadow-lg hover:bg-green-600 transition ">Explore carrers</button>
    </div>
  );
}

export default Explore;
