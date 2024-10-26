import React from "react";

const placeholderImage ="https://via.placeholder.com/300?text=No+Image";
const image=''
function Banner_Earphone() {
  return (
    <div className="max-w-[1200px] mx-auto flex justify-center item-center py-10 ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 item-center text-white rounded-3xl bg-red-600">
          <div className="p-4 sm:p-6 flex flex-col justify-center">
            <p className="text-4xl">30% OFF</p>
            <h1 className="font-bold uppercase text-6xl">title</h1>
            <p className="text-sm">description</p>
          </div>
          <div className="h-full flex item-center">
            <img src={image || placeholderImage} className="w-[250px] md:w-[350px] mx-auto drop-shadow-2xl object-cover"/>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 gap-4 ">
            <p className="font-bold text-xl">Productname</p>
            <p className="font-bold text-5xl">Promotion</p>
            <p className="text-sm">Detail</p>
            <div>
              <button className="bg-white text-red-600 rounded-full px-4 py-2  ">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner_Earphone;
