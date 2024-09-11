import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const sidebar = () => {
  return (
    <div className=" flex flex-cols bg-slate-100">
      <div className=" px-2 sm: pl-14 py-3 border border-black">
        <Image src={assets.blogger} width={120} alt="" />
      </div>

      <div className=" w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[-50%] sm:w-[80%] absolute right-0">
          <Link
            href="/admin/addProducts"
            className=" flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
          >
            <Image src={assets.add} alt=" " width={28} />
            <p>Add Blog</p>
          </Link>

          <Link
            href="/admin/blogLists"
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
          >
            <Image src={assets.add} alt=" " width={28} />
            <p>Blog Lists</p>
          </Link>
          <Link
            href="/admin/subscriptions"
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
          >
            <Image src={assets.add} alt=" " width={28} />
            <p>Subscription</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
