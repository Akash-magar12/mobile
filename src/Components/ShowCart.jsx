import { useContext } from "react";
import Back from "./Back";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Contexted } from "./Context";
const ShowCart = () => {
  const { cart, handleIncre, handleDecre, handleDelete } =
    useContext(Contexted);
  const total = cart.reduce((acum, curr) => {
    return acum + (curr.quantity || 0) * curr.price;
  }, 0);

  return (
    <div className="w-full ">
      <Back />
      <div className="w-full my-4 ">
        <h2>Cart({cart.length})</h2>
        <div className="w-full my-4  min-h-screen flex-col md:flex-row    flex gap-10">
          <div className="flex flex-col w-full gap-7 ">
            {cart.map((item) => (
              <div
                key={item._id}
                className="left  border-b border-white pb-4 gap-3    w-full flex  "
              >
                <div className="w-36 h-28 rounded overflow-hidden ">
                  <img
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="w-full flex flex-col  ">
                  <p className="text-sm">{item.title}</p>
                  <p className="text-sm">{item.brand}</p>
                  <div className="flex my-1 items-center gap-3">
                    <span className="line-through text-sm text-zinc-400">
                      ₹{Math.round(item.previousPrice)}
                    </span>
                    <span className="text-sm">
                      ₹{Math.round(item.price * item.quantity)}
                    </span>
                  </div>
                  <div className="flex items-center  justify-between w-full">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDecre(item._id)}
                        className="bg-[#1F1F1F] text-white px-2 py-1 rounded text-sm hover:bg-zinc-600 transition duration-300"
                      >
                        -
                      </button>
                      <span className="text-base">{item.quantity}</span>
                      <button
                        onClick={() => handleIncre(item._id)}
                        className="bg-[#1F1F1F] text-white px-2 py-1 rounded text-sm hover:bg-zinc-600 transition duration-300"
                      >
                        +
                      </button>
                    </div>
                    <span
                      onClick={() => handleDelete(item._id)}
                      className="cursor-pointer"
                    >
                      <RiDeleteBin6Line />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="right   lg:w-[35%] w-full  sticky top-5 self-start  ">
            <h2>Order Summary</h2>
            <div className="lg:w-[25rem] flex flex-col gap-6 p-4 mt-4 rounded-xl bg-[#1F1F1F]">
              <div className="flex justify-between">
                <p className="text-zinc-400 text-sm">Delivering</p>
                <p className="text-sm text-green-400">FREE</p>
              </div>
              <div className="flex justify-between">
                <p className="text-zinc-400 text-sm">Subtotal</p>
                <p className="text-zinc-400 text-sm">₹500</p>
              </div>
              <div className="flex justify-between">
                <p className="text-zinc-400 text-sm">Discounts</p>
                <p className="text-sm text-red-400">₹100</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm">Total</p>
                <p className="text-sm">₹{Math.round(total)}</p>
              </div>
              <button className=" text-sm py-2 rounded-full bg-white text-black">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCart;
