import React from "react";

function Info() {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <h1 className="text-5xl font-bold text-center">
        We scale like a dream
      </h1>
      <button className="px-5 py-3 mt-5 mb-20 rounded-full bg-hijau text-white font-semibold drop-shadow-lg hover:bg-green-600 transition ">
        Scale with us
      </button>
      <div className="flex justify-center items-center">
        <div className="bg-hijau-light shadow-2xl shadow-hijau-light w-64 h-[340px] p-5 rounded-[30px] relative mx-5">
          <img src="https://rfun-dev.github.io/gojak/images/data-download.png" className="absolute -top-20 left-20" alt="data"/>
          <div className="mt-[150px] px-3">
            <h1 className="text-4xl font-bold">190 Million+</h1>
            <p className="text-lg font-bold">app downloads since 2015</p>
          </div>    
        </div>
        <div className="bg-purple-light shadow-2xl shadow-purple-light w-64 h-[340px] p-5 rounded-[30px] relative mx-5">
          <img src="https://rfun-dev.github.io/gojak/images/data-driver.png" className="absolute -top-28 left-14" alt="data"/>
          <div className="mt-[150px] px-3">
            <h1 className="text-4xl font-bold">2 million+</h1>
            <p className="text-lg font-bold">driver patners</p>
          </div>    
        </div>
        <div className="bg-orange-light shadow-2xl shadow-orange-light w-64 h-[340px] p-5 rounded-[30px] relative mx-5">
          <img src="https://rfun-dev.github.io/gojak/images/data-merch.png" className="absolute -top-28 left-16" alt="data"/>
          <div className="mt-[150px] px-3">
            <h1 className="text-4xl font-bold">900.000+</h1>
            <p className="text-lg font-bold">GoFood merchants</p>
          </div>    
        </div>
        <div className="bg-blue-light shadow-2xl shadow-blue-light w-64 h-[340px] p-5 rounded-[30px] relative mx-5">
          <img src="https://rfun-dev.github.io/gojak/images/data-jump.png" className="absolute -top-20 left-20" alt="data"/>
          <div className="mt-[150px] px-3">
            <h1 className="text-4xl font-bold">2.448x</h1>
            <p className="text-lg font-bold">jump in donwloads from 2015 to 2020</p>
          </div>    
        </div>
      </div>
    </div>
  );
}

export default Info;
