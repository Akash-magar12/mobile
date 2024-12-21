import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";

const Back = () => {
  const navigate = useNavigate();
  const navi = () => {
    navigate(-1);
  };
  return (
    <div className="flex gap-4 items-center">
      <span onClick={navi} className="text-xl md:text-3xl cursor-pointer">
        <IoMdArrowBack />
      </span>
    </div>
  );
};

export default Back;
