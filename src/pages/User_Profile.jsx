//import React from 'react'

import User_profile_data from "../components/User_profile_data";
import User_profile_info from "../components/User_profile_info";

function User_Profile() {
  return (
    <div className="container mx-auto px-6">
      <div className="flex mt-2 gap-4">
        {/* Left Section */}
        <section className="flex flex-col rounded-lg w-[25%]">
          <User_profile_info />
        </section>

        {/* Right Section */}
        <section className="rounded-lg w-[75%]">
          <User_profile_data />
        </section>
      </div>
    </div>
  );
}

export default User_Profile;
