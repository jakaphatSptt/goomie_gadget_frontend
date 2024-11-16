import { CgProfile } from "react-icons/cg";
import { MdOutlineRequestPage } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { LuTicket } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";

const customerName = "Stupid customer"
const Data = [
    {
        icon : <CgProfile /> ,
        title : "Profile"
    },
    {
        icon : <MdOutlineRequestPage /> ,
        title : "Orders"
    },
    {
        icon : <FaRegHeart /> ,
        title : "Wish List"
    },
    {
        icon : <FaRegStar /> ,
        title : "Reviews"
    },
    {
        icon : <LuTicket /> ,
        title : "Vouchers"
   
    },
]


function User_profile_info() {
  return (
    <div className="container mx-auto">

      <div className="p-8 mb-4">
        <div className="rounded-full size-32 bg-red-400 mx-auto"></div>
        <div className="rounded-full w-8 h-8 bg-red-200 relative z-12 bottom-7 left-10 mx-auto "></div>
        <p className="text-center font-bold text-xl">{customerName}</p>
      </div>

      <div className="p-10">
        <div className="flex flex-col gap-4">
             {Data.map((item, index) => (
                <button key={index} className ="flex gap-4 p-2 items-center w-full font-semibold text-2xl"> {item.icon} {item.title} </button>
                 ))}
        </div>
      </div>

      <div className="mt-10">
         <button className="flex gap-4 p-2 items-center w-full font-semibold text-2xl ml-4"><IoIosLogOut />Logout</button>
      </div>

    </div>
  );
}

export default User_profile_info;
