import SingleProduct from "./SingleProduct";
import Heading from "./Heading";
import Category from "./Category";
import { useFetchData } from "./UseFetch";

const BestOffers = () => {
  const { data, loading } = useFetchData(
    "https://jsonserver.reactbd.com/watch"
    // Data fetched from React BD JSON Server: https://jsonserver.reactbd.com/
  );
  const info = {
    head: "Best Offers",
    para: " Get the best value on premium devices.",
  };
  return (
    <div className="py-2 md:py-6">
      <Category />

      <Heading info={info} />
      <SingleProduct data={data} loading={loading} />
    </div>
  );
};

export default BestOffers;
