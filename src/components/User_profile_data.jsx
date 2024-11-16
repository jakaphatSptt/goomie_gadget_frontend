const Data = [
  {
    title: "Profile Name",
    detail: "Stupid customer01",
  },
  {
    title: "Phone Number",
    detail: "Stupid customer01",
  },
  {
    title: "Email",
    detail: "Stupid customer01",
  },
  {
    title: "Password",
    detail: "Stupid customer01",
  },
  {
    title: "Birth Date",
    detail: "Stupid customer01",
  },
];

function User_profile_data() {
  return (
    <div className="container mx-auto p-6">
      <div>
        <p className="font-bold text-2xl">Profile</p>
        <p className="font-bold text-xl mt-8">Personal Data</p>
      </div>
      <div className="mt-8">
        {Data.map((item, index) => (
          <div key={index} className="py-4 flex flex-cols gap-5">
            <span className="font-normal text-lg w-[20%] py-2 ">{item.title}</span>
            <input placeholder={item.detail} className="w-[60%]"></input>
            <span className="text-blue-700 font-semibold w-[20%] text-center py-2"><button>Edit</button></span>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default User_profile_data;
