/* eslint-disable react/prop-types */

import { Link } from "react-router";

const Heading = ({ info }) => {
  return (
    <>
      <div className="flex justify-between  items-center">
        <div className="py-6 md:py-8 flex flex-col gap-2">
          <p className=" text-2xl md:text-3xl">{info.head}</p>
          <p className="text-xs md:text-base text-zinc-400">{info.para}</p>
        </div>
        <div className="flex gap-4 ">
          <Link
            to="/allProducts"
            className="text-xs md:text-[12px] cursor-pointer border border-zinc-400 px-2 py-1 rounded-full"
          >
            View All
          </Link>
        </div>
      </div>
    </>
  );
};

export default Heading;
