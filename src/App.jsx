import Navbar from "./Components/Navbar";
import Allproduct from "./Components/Allproduct";
import Feature from "./Components/Feature";
import Carts from "./Components/Carts";
import Arrival from "./Components/Arrival";
import BestOffers from "./Components/BestOffers";
import ProductDetail from "./Components/ProductDetail";
import Mobile from "./Pages/Mobile";
import Case from "./Pages/Case";
import Watches from "./Pages/Watches";
import Accessories from "./Pages/Accessories";
import LoginMain from "./Pages/LoginMain";
import Calltoaction from "./Components/Calltoaction";
import Footer from "./Pages/Footer";
import PhoneLinks from "./Components/PhoneLinks";
import { Route, Routes, useLocation } from "react-router";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="bg-[#121212] pb-20 overflow-x-hidden  lg:pb-2 px-3 md:px-6 lg:px-16 py-2 pt-4  text-white w-full min-h-screen">
      <Navbar />
      <PhoneLinks />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BestOffers />

              <Feature />
              <Arrival />
              <Calltoaction />
            </>
          }
        />
        <Route path="/allProducts" element={<Allproduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Carts />} />
        <Route path="/smartphone" element={<Mobile />} />
        <Route path="/case" element={<Case />} />
        <Route path="watch" element={<Watches />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/login" element={<LoginMain />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
