import React from "react";
import Dropdown from "../components/Dropdown";

function Footer() {
  return (
    <div className="bg-black">
      <div className="px-28 py-[5px] text-white gap-5 mt-5">
        <div className="flex -ml-8">
          <img src="https://rfun-dev.github.io/gojak/images/icon2.png" alt="" className="w-24 -mt-16 -mr-4" />
          <h1 className="text-3xl font-bold">gojek</h1>
        </div>
        <div className="grid grid-cols-6 gap-9 -mt-5">
          <div>
            <h1 className="text-xl font-bold mb-5">Company</h1>
            <p className="mb-2">About</p>
            <p className="mb-2">Product</p>
            <p className="mb-2">Blog</p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-5">Join with us</h1>
            <p className="mb-2">Driver with us</p>
            <p className="mb-2">Merchant Partners</p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-5">Carrers</h1>
            <p className="mb-2">Student</p>
            <p className="mb-2">Professional</p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-5">Get in touch</h1>
            <p className="mb-2">Help Center</p>
            <p className="mb-2">Our Location</p>
          </div>
          <div className="col-span-2">
            <h1 className="text-xl font-bold mb-5">Download with us</h1>
            <div className="mb-10">
              <i class="fa-brands fa-facebook mr-9 fa-2xl"></i>
              <i class="fa-brands fa-twitter mr-9 fa-2xl"></i>
              <i class="fa-brands fa-instagram mr-9 fa-2xl"></i>
              <i class="fa-brands fa-youtube mr-9 fa-2xl"></i>
            </div>
          </div>
        </div>
        <hr className="border-slate-700 my-10" />
        <div className="grid grid-cols-6 my-5">
          <div>
            <p className="mb-2">Privacy Policy</p>
            <p className="mb-2">Data Attribution</p>
          </div>
          <div className="col-span-2">
            <p className="mb-2">Terms & Conditions</p>
            <p className="mb-2">Cookie Settings</p>
          </div>
          <div className=" flex items-center">
            <i class="fa-solid fa-location-dot fa-xl mr-4"></i>
            <Dropdown title="indonesia"/>
          </div>
          <div className=" flex items-center">
            <i class="fa-solid fa-language mr-4"></i>
            <Dropdown title="English"/> 
          </div>
        </div>
        <p className="w-[1100px] my-10 text">© 2022 Gojek | Gojek is a trademark of PT GoTo Gojek Tokopedia Tbk. Registered in the Directorate General of Intellectual Property of the Republic of Indonesia.</p>
      </div>
    </div>
  );
}

export default Footer;
