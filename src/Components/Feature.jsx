import phone from "../assets/phones.jpg";
import cover from "../assets/cover.jpg";
import watch from "../assets/watch.jpg";
import cloths from "../assets/cloths.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router";

const Feature = () => {
  const features = [
    {
      id: 1,
      title: "Smartphones",
      para: "Explore the latest smartphones.",
      discount: "Up to 15% OFF",
      image: phone,
      route: "/smartphone",
    },
    {
      id: 2,
      title: "Watches",
      para: "Elevate your style with our premium watches.",
      discount: "Up to 20% OFF",
      image: watch,
      route: "/watch",
    },
    {
      id: 3,
      title: "Phone Case",
      para: "Protect your phone with our premium phone cases.",
      discount: "Up to 10% OFF",
      image: cover,
      route: "/case",
    },
    {
      id: 4,
      title: "Clothes",
      para: "Explore our wide range of stylish and comfortable clothing.",
      discount: "Up to 12% OFF",
      image: cloths,
      route: "/accessories",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className="py-6 md:py-10">
      <h2 className="text-xl md:text-3xl">Featured Categories</h2>
      <p className="text-sm mt-1 mb-4 text-gray-400">
        Enjoy up to 20% OFF in the best offers
      </p>

      <div className="slider-container w-full     ">
        <Slider {...settings}>
          {features.map((feat) => (
            <Link
              to={feat.route}
              key={feat.id}
              className=" cursor-pointer   relative overflow-hidden rounded-2xl  h-[24rem] md:h-[35rem]"
            >
              <div className="overlay bg-[#0000001b] rounded-2xl left-0 top-0 transition-all absolute w-full h-full hover:bg-[#0000006b]"></div>
              <img
                className="w-full px-1 h-full  object-center object-cover"
                src={feat.image}
                alt={feat.title}
              />
              <div className="absolute bottom-[5%] left-[5%]">
                <h4 className="font-bold md:text-lg mb-2">{feat.title}</h4>
                <p className="text-sm md:text-lg">{feat.para}</p>
              </div>
              <div className="absolute right-[5%] top-[5%]">
                <button className="text-xs text-black md:text-lg bg-[#ffffffd2] md:px-4 md:py-2 rounded-full px-3 py-1">
                  {feat.discount}
                </button>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feature;
