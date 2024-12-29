import img from "../assets/samsung.svg";
const Brands = () => {
  return (
    <div className="w-full  bg-green-400">
      <h2>Top Brands</h2>
      <div className="w-[25rem] flex justify-between items-center h-full bg-red-300">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Brands;
