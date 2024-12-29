/* eslint-disable react-hooks/exhaustive-deps */
import Back from "./Back";
import Category from "./Category";
import { MoonLoader } from "react-spinners";
import Cards from "./Cards";
import { useFetchData } from "./UseFetch";
import { useContext, useEffect, useState } from "react";
import { Contexted } from "./Context";

const Allproduct = () => {
  // Data fetched from React BD JSON Server
  const API_URL = "https://jsonserver.reactbd.com/amazonpro";

  // Custom hook for fetching data
  const { data, loading } = useFetchData(API_URL);
  // State for filtered data
  const [filteredData, setFilteredData] = useState([]);

  // Query from context
  const { query } = useContext(Contexted);

  // Filter data based on query
  const filterData = () => {
    if (data) {
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  // Trigger filter on query or data change
  useEffect(() => {
    filterData();
  }, [query, data]);

  return (
    <div className="py-6 md:py-10">
      <Category />
      <div className="flex gap-4 items-center">
        <Back />

        <p className="py-6 md:py-8 text-xl md:text-3xl">Best Offers</p>
      </div>

      {loading ? (
        <div className="flex justify-center h-[70vh] items-center py-4">
          <MoonLoader color="white" />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {filteredData.length > 0 ? (
            filteredData.map((product) => (
              <Cards
                key={product._id}
                id={product._id}
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
    </div>
  );
};

export default Allproduct;
