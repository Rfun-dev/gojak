import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Explore from "../components/Explore";
import Content from "../screen/home/Content";
import Footer from "../screen/Footer";

function Home() {
  return (
    <div className="bg-hitam">
      <Navbar/>
      <Header 
        text="3 countries. 20+ products. 1 leading on-demand platform." 
        style="text-white text-7xl font-bold leading-[6rem] flex flex-col absolute top-1/2 left-40 -translate-y-32 w-1/3" 
        src="https://source.unsplash.com/1920x1080?night"/>
      <Explore text1="We're Gojek" text2="the driver of change"/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default Home;
