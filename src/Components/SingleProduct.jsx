/* eslint-disable react/prop-types */
import { MoonLoader } from "react-spinners";
import Cards from "./Cards";

const SingleProduct = ({ data, loading }) => {
  return (
    <>
      {loading ? (
        <div className="flex justify-center  items-center py-4">
          <MoonLoader color="white" />
          
        </div>
      ) : (
        <div className="flex gap-5 overflow-x-auto scroller">
          {data.length > 0 ? (
            data.map((product) => (
              <Cards
                id={product._id}
                key={product._id}
                title={product.title}
                image={product.image}
                price={product.price}
                previousPrice={product.previousPrice}
                category={product.category}
                brand={product.brand}
              />
            ))
          ) : (
            <h2>No products available</h2>
          )}
        </div>
      )}
    </>
  );
};

export default SingleProduct;
