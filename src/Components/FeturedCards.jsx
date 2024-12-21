/* eslint-disable react/prop-types */
import { MoonLoader } from "react-spinners";
import Back from "./Back";
import Category from "./Category";
import Cards from "./Cards";

const FeturedCards = ({ data, loading, title }) => {
  return (
    <>
      <Category />
      <div className="flex gap-4 items-center">
        <Back />
        <p className="py-6 md:py-8 text-xl md:text-3xl">{title}</p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-4">
          <MoonLoader color="white" />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 gap-4">
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
            <h2 className="text-center">No products available</h2>
          )}
        </div>
      )}
    </>
  );
};

export default FeturedCards;
