// import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image1 from "../assets/images/brands/iphone.png";
import Image2 from "../assets/images/brands/razer-1.svg";

const ProductData = [
  {
    id: 1,
    img: Image1,
    title: "iPhone 50",
    title2: "ราคาแรงแซงทุกค่าย",
  },
  {
    id: 2,
    img: Image2,
    title: "ProductName",
    title2: "ProductName",
  },
];
function Hero_Section() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className="container max-w-[1200px] mx-auto mt-4">
      <div className="rounded-3xl min-h-[550px] sm:min-h-[500px] hero-bg-color flex justify-center items-center">
        <div className="container pb-6">
          <Slider {...settings}>
            {ProductData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {/* Text */}
                  <div className="flex flex-col justify-center p-4 gap-1 text-center">
                    <h1 className="text-3xl font-bold mb-2 text-gray-800">{data.title}</h1>
                    <h2 className="text-lg text-gray-600">{data.title2}</h2>
                  </div>
                {/* Product Image  */}
                  <div>
                    <img
                      src={data.img}
                      alt={data.title}
                      className="w-[300px] h-[300px] sm:h-[450px] 
                    sm:scale-105 lg:scale-110 object-contain mx-auto transition-transform duration-300 ease-in-out hover:scale-110 
                    drop-shadow-[-2px_8px_9px_rgba(0,0,0,.3)]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Hero_Section;
