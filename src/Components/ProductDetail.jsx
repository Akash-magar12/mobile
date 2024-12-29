import Back from "./Back";
import { BsCart3 } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import { Contexted } from "./Context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router";
import Comments from "./Comments";
import RelatedProducts from "./RelatedProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { handleAdd } = useContext(Contexted);
  const API_URL = "https://jsonserver.reactbd.com/amazonpro";

  const notify = () =>
    toast.success("Product Added Successfully!", {
      position: "bottom-right",
      autoClose: 1200,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/${id}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="flex  h-[65vh] w-full justify-center items-center ">
          <MoonLoader color="white" />
        </div>
      ) : (
        <div className=" md:my-10 my-6 w-full pb-10  ">
          <ToastContainer
            position="bottom-right"
            autoClose={1200}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <Back />
          <div className="w-full     lg:my-10  lg: gap-4 lg:gap-12 flex-wrap   justify-center    flex h-[65%] ">
            <div className="left min-h-[12rem]  flex justify-center items-center w-[20rem] lg:h-[26rem] lg:w-[22rem]">
              <img
                className="h-full cursor-pointer  rounded  w-full object-cover "
                src={data?.image}
                alt=""
              />
            </div>
            <div className="right lg:w-[50%] justify-center px-3 lg:px-0 lg:py-10  flex flex-col gap-2 lg:gap-4 items-start h-full ">
              <div>
                <h2 className="text-xl font-bold lg:text-3xl">{data?.title}</h2>
                <div className="flex items-center gap-4 mt-2">
                  <p className="text-sm lg:text-md capitalize">
                    Category : {data?.category || "Not Found"}
                  </p>
                  <p className="text-sm lg:text-md capitalize">
                    Brand : {data?.brand || "Not Found"}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="md:text-lg text-sm"> ₹{data?.price}</p>
                  <p className=" md:text-lg text-sm text-zinc-400">
                    MRP{" "}
                    <span className="line-through text-sm">
                      ₹{data?.previousPrice}
                    </span>{" "}
                  </p>
                  <p className="text-sm md:text-lg text-green-400">{`(${Math.round(
                    Math.random() * 100 + 1
                  )}%OFF)`}</p>
                </div>
                <p className="text-sm text-green-400">inclusive of all taxes</p>
              </div>
              <p className="text-sm text-zinc-400">{data?.description}</p>
              <button
                onClick={() => {
                  if (data) {
                    handleAdd(data);
                    notify();
                  }
                }}
                className="bg-white gap-4 mt-2 md:mt-0 text-sm flex items-center px-2 py-2 lg:px-4 lg:py-3 rounded text-black"
              >
                <span className="text-md lg:text-xl">
                  <BsCart3 />
                </span>{" "}
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
      <Comments />
      <RelatedProducts category={data?.category} />
    </>
  );
};

export default ProductDetail;
