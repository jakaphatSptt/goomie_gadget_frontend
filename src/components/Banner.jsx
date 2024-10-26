import React from "react";
import PropTypes from "prop-types";
const placeholderImage ="https://via.placeholder.com/300?text=No+Image";
function Banner({data}) {
  return (
    <div className="max-w-[1280px] mx-auto flex justify-center item-center py-10 ">
      <div className="container">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 item-center text-white rounded-3xl ${data.bgColor}`} >
          <div className="p-4 sm:p-6 flex flex-col justify-center">
            <p className="text-4xl">{data.discount}% OFF</p>
            <h1 className="font-bold uppercase text-6xl">{data.title}</h1>
            <p className="text-sm">{data.description}</p>
          </div>
          <div className="h-full flex item-center">
            <img src={data.image || placeholderImage} className="w-[250px] md:w-[350px] mx-auto drop-shadow-2xl object-cover"/>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 gap-4 ">
            <p className="font-bold text-xl">{data.productname}</p>
            <p className="font-bold text-5xl">{data.promotion}</p>
            <p className="text-sm">{data.detail}</p>
            <div>
              <button className={`bg-white ${data.btText} rounded-full px-4 py-2`} >Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  data: PropTypes.shape({
    discount: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    productname: PropTypes.string.isRequired,
    promotion: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    btText: PropTypes.string.isRequired,
  }).isRequired,
};

export default Banner;
