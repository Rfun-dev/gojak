import React from "react";
import Card from "../../components/Card";
import Donwload from "../../components/Donwload";
import Info from "../../components/Info";
import Job from "../../components/Job";
import Loyalty from "../../components/Loyalty";
import Opportunity from "../../components/Opportunity";

function Content() {
  return (
    <>
      <div className="bg-white rounded-[100px]">
        <Opportunity />
        <Info />
        <Job />
      </div>
      <Card />
      <Loyalty/>
      <Donwload/>
    </>
  );
}

export default Content;
