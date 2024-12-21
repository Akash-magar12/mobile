import Login from "../Components/Login";
import { useState } from "react";
import Signup from "../Components/Signup";

const LoginMain = () => {
  const [login, setLogin] = useState(true);
  const handlelogin = () => {
    setLogin(false);
  };
  const handleSign = () => {
    setLogin(true);
  };
  return (
    <div className="w-full  lg:h-[80vh] flex items-center justify-center ">
      {login ? <Login handle={handlelogin} /> : <Signup handle={handleSign} />}
    </div>
  );
};

export default LoginMain;
