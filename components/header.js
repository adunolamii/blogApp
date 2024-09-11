import React from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";

const header = () => {
  return (
    <div className=" py-5 px-4 md:px12 lg:px28">
      <div className=" flex justify-between items-center">
        <Image
          src={assets.blogger}
          width={180}
          alt=""
          className="w-[130px] sm:w-auto"
        />
        <button className=" flex items-center gap-2 font-medium py-1  sm: px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
          Get Started
        </button>
      </div>
     
      <div className="text-center my-8">
        <h1 className=" text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className=" mt-10 max-4-[-740] m-auto">
        The blog app is your communication tool when publishing editorial content using different layout options, widget combinations, teaser text, or teaser images. You can publish articles pre-dated or back-dated, and even a release process is possible.
        </p>
        <form className=" flex justify-between max-w-[500px] scale-75px sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]">
          <input
            type="email"
            placeholder="Enter your email"
            className="pl-4 outline-none"
          />
          <button
            type="submit"
            className=" border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default header;
