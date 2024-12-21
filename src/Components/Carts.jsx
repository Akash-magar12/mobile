import { BsCart3 } from "react-icons/bs";
import { useContext } from "react";
import { Contexted } from "./Context";
import ShowCart from "./ShowCart";
import { Link } from "react-router";

const Carts = () => {
  const { cart } = useContext(Contexted);
  return (
    <div className="py-6 md:py-10 w-full  min-h-[60vh]">
      {cart.length === 0 ? (
        <div className="flex flex-col items-center gap-3 justify-center h-full">
          <span className=" text-4xl md:text-6xl text-zinc-500">
            <BsCart3 />
          </span>
          <p className="text-sm md:text-xl text-zinc-500">Your Cart is Empty</p>
          <Link
            to="/allProducts"
            className="bg-white text-sm text-black px-6 py-2 md:px-8 md:py-2 rounded"
          >
            Go Shopping
          </Link>
        </div>
      ) : (
        <ShowCart />
      )}
    </div>
  );
};

export default Carts;
