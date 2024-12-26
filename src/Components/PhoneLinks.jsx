import { AiOutlineHome } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { RiMenuLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router";

const PhoneLinks = () => {
  return (
    <div className="fixed bg-[#121212] z-[9999] flex md:hidden items-center justify-between w-full bottom-0 py-3 drop-shadow-2xl left-0 px-3 border-t border-gray-600">
      <Link
        to="/"
        className="flex flex-col text-zinc-400 gap-1 cursor-pointer items-center"
      >
        <span className="text-lg">
          <AiOutlineHome />
        </span>
        <p className="text-sm">Home</p>
      </Link>
      <Link
        to="/login"
        className="flex flex-col text-zinc-400 gap-1 cursor-pointer items-center"
      >
        <span className="text-lg">
          <FaRegUser />
        </span>
        <p className="text-sm">Login</p>
      </Link>
      <Link
        to="/cart"
        className="flex flex-col text-zinc-400 gap-1 cursor-pointer items-center"
      >
        <span className="text-lg">
          <BsCart3 />
        </span>
        <p className="text-sm">Cart</p>
      </Link>
      <p className="flex flex-col text-zinc-400 gap-1 cursor-pointer items-center">
        <span className="text-lg">
          <RiMenuLine />
        </span>
      </p>
    </div>
  );
};

export default PhoneLinks;
