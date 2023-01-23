import React from "react";

function Opportunity() {
  return (
    <div className="flex items-center justify-center">
      <div className="m-10 -mt-16 w-52 flex flex-col items-center item-center">
        <img src="/images/oppur-star.png" alt="oppur" className="w-24 h-24 animate-bounce"/>
        <h2 className="text-xl font-bold my-2 text-center">Fortune's favorite</h2>
        <p className="text-sm text-center">Southeast Asia's only compnay to make it to Fortune's Change the World' list twice</p>
      </div>
      <div className="m-10 -mt-16 w-52 flex flex-col items-center item-center ">
        <img src="/images/oppur-money.png" alt="oppur" className="w-24 h-24 animate-bounce"/>
        <h2 className="text-xl font-bold my-2 text-center">$7.1 b contribution</h2>
        <p className="text-sm text-center">Value added to the Indonesian economy in 2019.</p>
      </div>
      <div className="m-10 -mt-16 w-52 flex flex-col items-center item-center">
        <img src="/images/oppur-greener.png" alt="oppur" className="w-24 h-24 animate-bounce"/>
        <h2 className="text-xl font-bold my-2 text-center">Tonne times greener</h2>
        <p className="text-sm text-center">Saved 11.3 tonnes of plastic in cutlery since October 2020.</p>
      </div>
      <div className="m-10 -mt-16 w-52 flex flex-col items-center item-center">
        <img src="/images/oppur-chart.png" alt="oppur" className="w-24 h-24 animate-bounce"/>
        <h2 className="text-xl font-bold my-2 text-center">Digitising merchants</h2>
        <p className="text-sm text-center">Resulted in 80% growth in number of GoFood merchants during pandemic.</p>
      </div>
    </div>
  );
}

export default Opportunity;
