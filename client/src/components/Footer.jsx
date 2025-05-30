import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        {/* ------- Left Section ------- */}
        <div>
          <img className="mb-5 w-40" src={assets.perskripsi} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Perskripsi is a modern, user-friendly healthcare platform that helps
            patients easily connect with qualified medical professionals and
            manage their appointments online. Designed with convenience,
            efficiency, and accessibility in mind, this app bridges the gap
            between patients and healthcare providers by offering a seamless,
            end-to-end appointment booking experience.
          </p>
        </div>

        {/* ------- Center Section ------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* ------- Right Section ------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>011-23456789</li>
            <li>creativeVision@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* -------------- Copyright Text -------------- */}
      <div>
        <hr className="text-gray-300" />
        <p className="py-5 text-sm text-center">Copyright 2024@ Perskripsi - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
