import { IoSearchOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { useContext } from "react";
import { Contexted } from "./Context";
import { SiShopee } from "react-icons/si";
import { Link, useNavigate } from "react-router";
const Navbar = () => {
  const { cart, query, setQuery } = useContext(Contexted);

  const navi = useNavigate();
  const handleSearch = () => {
    navi("/allProducts");
  };

  return (
    <nav className="flex items-center justify-between">
      <Link to="/" className="text-2xl">
        <SiShopee />
      </Link>

      <div className="  gap-3 flex items-center ">
        <div className="flex bg-[#242424] w-[12rem] md:w-[35rem] flex-row-reverse  rounded-full py-2.5 px-5 md:py-[14px] items-center gap-4">
          <span onClick={handleSearch} className="text-xl cursor-pointer">
            <IoSearchOutline />
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            // onFocus={handleSearch}
            className="w-full bg-transparent outline-none text-sm border-none"
            type="text"
            placeholder="Search Products.."
          />
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            {cart.length > 0 && (
              <div className="bg-white  flex justify-center items-center cursor-pointer text-black  h-5 w-5 rounded-full absolute top-[-10px] right-[-10px] text-xs hover:bg-gray-100 transition duration-200">
                {cart.length}
              </div>
            )}
            <Link
              to="/cart"
              title="cart"
              className="text-xl cursor-pointer hover:text-gray-600 transition duration-200"
            >
              <BsCart3 />
            </Link>
          </div>
          <Link
            to="/login"
            title="login"
            className="text-xl text-white cursor-pointer hover:text-gray-600 transition duration-200"
          >
            <FaRegUser />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
