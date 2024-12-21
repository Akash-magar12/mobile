/* eslint-disable react/prop-types */
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router";

const Cards = ({ id, title, image, price, previousPrice, category, brand }) => {
  const discount = Math.round(Math.random() * 50);
  return (
    <Link
      to={`/product/${id}`}
      className="w-[10rem] relative h-[18rem] md:h-[24rem] flex flex-col gap-3 shadow-2xl  md:w-[13rem] lg:w-[16rem] flex-shrink-0  bg-[#000] p-2  overflow-hidden rounded cursor-pointer b"
    >
      <div className="absolute hover:opacity-100 transition-all opacity-0 w-full h-full left-0 top-0 bg-[#00000035]"></div>
      <span className="absolute md:text-xl top-[5%] cursor-pointer right-[7%] h-7 w-7 bg-zinc-600 md:h-10 md:w-10 rounded-full flex justify-center items-center">
        <CiBookmark />
      </span>
      <div className="w-full   rounded overflow-hidden">
        <img
          className="w-full  hover:scale-[1.2] transition-all  object-cover object-center"
          src={image}
          alt={title}
        />
      </div>

      <div className="w-full flex px-2 flex-col gap-1 py-2  ">
        <div>
          <h2 className="text-sm md:text-lg capitalize">{title}</h2>
          <div className="flex items-center justify-between">
            <p className="text-xs capitalize text-gray-500">{category}</p>
            <p className="text-xs capitalize text-gray-500">{brand}</p>
          </div>
        </div>
        <div>
          <div className="flex gap-3">
            <p className="text-xs line-through text-zinc-500 ">
              Rs {Math.round(price)}
            </p>
            <span className="text-xs  text-green-400">{discount}%OFF</span>
          </div>
          <p className="text-xs md:text-lg mt-1">
            Rs {Math.round(previousPrice)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
