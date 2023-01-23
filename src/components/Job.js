import React from "react";

function Job() {
  return (
    <div className="relative">
      <div className="h-full w-full rounded-b-[100px] overflow-hidden">
        <img src="https://source.unsplash.com/1920x1080?office-night" />
        <h2 className="text-6xl text-white font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Join the ride
        </h2>
      </div>  
    </div>
  );
}

export default Job;
