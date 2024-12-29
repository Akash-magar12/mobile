import { useEffect, useState } from "react";
import Cards from "./Cards";
import { MoonLoader } from "react-spinners";

/* eslint-disable react/prop-types */
const RelatedProducts = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    if (category) {
      try {
        const categoryWithoutSpaces = category.replace(/\s+/g, "");
        const response = await fetch(
          `https://jsonserver.reactbd.com/${categoryWithoutSpaces}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch related products");
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
        // Set loading to false if there's an error
      }
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <div className="my-10 md:my-2">
      <h2 className="text-2xl my-6   font-bold">
        Related Products{" "}
        <span className="font-normal capitalize">( {category})</span>
      </h2>
      <div className=" flex gap-5 overflow-x-auto scroller ">
        {data.length > 0 ? (
          data.map((d) => (
            <Cards
              key={d._id}
              id={d._id}
              title={d.title}
              image={d.image}
              price={d.price}
              previousPrice={d.previousPrice}
              category={d.category}
              brand={d.brand}
            />
          ))
        ) : (
          <div className="flex justify-center   items-center py-4">
            <MoonLoader color="white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
