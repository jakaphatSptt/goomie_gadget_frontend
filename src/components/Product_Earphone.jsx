import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const placeholderImage = "https://via.placeholder.com/300?text=No+Image";
// const ProductData = [
//     {
//         image : '',
//         productname : 'Beetle Headphone',
//         price:'1,200'
//     },
//     {
//         image : '',
//         productname : 'CapDoorLeg Headphone',
//         price:'20'
//     },
//     {
//         image : '',
//         productname : 'Sniper v.2',
//         price:'100'
//     },
//     {
//         image : '',
//         productname : 'Dragonball Z',
//         price:'1,890'
//     },
//     {
//         image : '',
//         productname : 'Ducky True Wireless',
//         price:'900'
//     }
// ]

function capitalizeWords(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function Product_Earphone() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://test-create-api.vercel.app/getall"
        );
        setProduct(res.data);
      } catch (err) {
        setError("Failed to fetch product data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="text-center text-lg">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <>
      <div className="max-w-[1280px] mx-auto flex flex-col justify-center item-center py-8 ">
        <div className="flex flex-col justify-center items-center mb-10 gap-3">
          <div className="font-bold text-4xl">Our Products</div>
          <div className="text-sm text-gray-600">Explore Our Products</div>
        </div>
        <div className="grid grid-cols-4 gap-9">
          {product.map((data) => (
            <div key={data.index} className="mb-1 space-y-1">
              <img
                src={data.image || placeholderImage}
                className="rounded-2xl"
              />
              <p className="font-semibold text-lg w-11/12 mx-auto">
                {capitalizeWords(data.name)}
              </p>
              <p className="font-bold text-lg w-11/12 mx-auto">
                ฿ {parseInt(data.price).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product_Earphone;
