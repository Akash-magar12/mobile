import { useFetchData } from "../Components/UseFetch";
import FeturedCards from "../Components/FeturedCards";
const Watches = () => {
  const API_URL = "https://jsonserver.reactbd.com/watch";
  const { data, loading } = useFetchData(API_URL);
  return (
    <div className="py-6 md:py-10">
      <FeturedCards data={data} loading={loading} title="Watches" />
    </div>
  );
};

export default Watches;
