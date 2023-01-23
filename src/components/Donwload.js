import React from "react";

function Donwload() {
  return (
    <div className="p-24 flex items-center justify-between -mt-20">
      <div className="w-[650px]">
        <h1 className="text-6xl font-bold text-white leading-tight">
          Good to Go ? Donwload the Gojek app Today!
        </h1>
        <div className="flex mt-10">
          <button className="bg-white px-5 py-3 text-slate-900 rounded-full mr-3">
            <img src="https://rfun-dev.github.io/gojak/images/google.png" className="w-5 h-5 inline-block" />{" "}
            Play Store
          </button>
          <button className="bg-white px-5 py-3 text-slate-900 rounded-full">
            <img src="https://rfun-dev.github.io/gojak/images/apple.png" className="w-5 h-5 inline-block" /> App
            Store
          </button>
        </div>
      </div>
      <img src="https://rfun-dev.github.io/gojak/images/data-download.png" className="w-[600px] "/> 
    </div>
  );
}

export default Donwload;
