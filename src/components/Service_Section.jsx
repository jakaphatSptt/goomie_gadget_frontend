import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
import { AiFillSafetyCertificate } from "react-icons/ai";

const ServiceData = [
  {
    icon : <MdLocalShipping className='text-5xl text-blue-600'/>,
    title : 'Free Shipping',
    description : 'Free shipping on all order'
  },
  {
    icon : <MdSupportAgent className='text-5xl text-blue-600'/>,
    title : 'Online Support 24/7',
    description : 'Technical support 24/7'
  },
  {
    icon : <FaRegCreditCard className='text-5xl text-blue-600'/>,
    title : 'Secure Payment',
    description : 'All Payment Secure'
  },
  {
    icon : <AiFillSafetyCertificate className='text-5xl text-blue-600'/>,
    title :'Safe Money',
    description : '30 Days Money Back'

  }
]
function Service_Section() {
  return (
    <div className="grid grid-cols-4 max-w-[1200px] mx-auto my-10 gap-4">
      {ServiceData.map((data, index)=>( 
        <div key={index} className='grid grid-rows-1 gap-1 text-center'>
          <div className='flex justify-center items-center row-span-1'>
            {data.icon}
          </div>
          <div className='font-bold text-lg text-gray-800 row-span-1'>
            {data.title}
          </div>
          <div className='text-gray-600 row-span-1'>
            {data.description}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Service_Section;
