import React from 'react'

const placeholderImage ="https://via.placeholder.com/300?text=No+Image";
const image = ''
const ProductData = [
    {   
        image : '',
        productname : 'Beetle Headphone',
        price:'1,200'
    },
    {
        image : '',
        productname : 'CapDoorLeg Headphone',
        price:'20'
    },
    {
        image : '',
        productname : 'Sniper v.2',
        price:'100'
    },
    {
        image : '',
        productname : 'Dragonball Z',
        price:'1,890'
    },
    {
        image : '',
        productname : 'Ducky True Wireless',
        price:'900'
    }
]
function Product_Earphone() {
  return (
    <>
        <div className="max-w-[1200px] mx-auto flex flex-col justify-center item-center py-8 ">
            <div className="flex flex-col justify-center items-center mb-10 gap-3">
                <div className="font-bold text-4xl">Our Products</div>
                <div className="text-sm text-gray-600">Explore Our Products</div>
            </div>
            <div className="grid grid-cols-4 gap-9">
                {ProductData.map((data)=>(
                    <div key={data.index} className="mb-2 space-y-1">
                        <img src={data.image || placeholderImage} className="rounded-2xl"/>
                        <p className="font-semibold text-lg w-11/12 mx-auto">{data.productname}</p>
                        <p className="font-bold text-lg w-11/12 mx-auto"> ฿ {data.price}</p>
                    </div>
                ))}              
            </div>
            
        </div>
    </>
  )
}

export default Product_Earphone