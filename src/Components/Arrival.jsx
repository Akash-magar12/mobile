import Heading from "./Heading";
import SingleProduct from "./SingleProduct";
import { useFetchData } from "./UseFetch";
const Arrival = () => {
  const { data, loading } = useFetchData(
    "https://jsonserver.reactbd.com/phonecase"
    // Data fetched from React BD JSON Server: https://jsonserver.reactbd.com/
  );

  const info = {
    head: "New Arrivals",
    para: "  Be the first to grab the latest  accessories!",
  };

  return (
    <div className="py-2 md:py-6">
      <Heading info={info} />
      <SingleProduct data={data} loading={loading} />
    </div>
  );
};

export default Arrival;
