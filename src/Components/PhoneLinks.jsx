import { AiOutlineHome } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { RiMenuLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router";

const PhoneLinks = () => {
  const links = [
    { name: "Home", icon: <AiOutlineHome />, path: "/" },
    { name: "Login", icon: <FaRegUser />, path: "/login" },
    { name: "Cart", icon: <BsCart3 />, path: "/cart" },
    { name: "Menu", icon: <RiMenuLine />, path: "/menu" },
  ];
  return (
    <div className="fixed bg-[#121212]  z-[9999] flex md:hidden items-center justify-between w-full bottom-0  py-3 drop-shadow-2xl left-0 px-3 border-t border-gray-600 ">
      {links.map((link, id) => (
        <Link
          to={link.path.toLowerCase()}
          key={id}
          className="flex flex-col text-zinc-400 gap-1 cursor-pointer items-center"
        >
          <span className="text-lg">{link.icon}</span>
          <p className="text-sm">{link.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default PhoneLinks;
