import React from "react";
import Hero_Section from "../components/Hero_Section";
import Category_Section from "../components/Category_Section";
import Service_Section from "../components/Service_Section";
import Banner_Earphone from "../components/Banner_Earphone";

function Home() {
  return (
  <section >
     <Hero_Section/>
     <Category_Section/>
     <Service_Section/>
     <Banner_Earphone/>
     
  </section>
   
  )
}

export default Home