import React from "react";
import Hero_Section from "../components/Hero_Section";
import Category_Section from "../components/Category_Section";
import Service_Section from "../components/Service_Section";
import Banner from "../components/Banner";
import Product_Earphone from "../components/Product_Earphone";

const BannerData = {
  discount:'40',
  title:'hello title',
  description:'only this day',
  image:'',
  productname:'Name',
  promotion:'Promotion',
  detail:'Detail2',
  bgColor:'bg-red-600',
  btText:'text-red-600'
}
const BannerData2 = {
  discount:'80',
  title:'Happy hours',
  description:'14-20 October',
  image:'',
  productname:'Nalika',
  promotion:'Promotion',
  detail:'Detail2',
  bgColor:'bg-green-500',
  btText:'text-green-500'
}

function Home() {
  return (
  <section >
     <Hero_Section/>
     <Category_Section/>
     <Service_Section/>
     <Banner data={BannerData}/>
     <Product_Earphone/>
     <Banner data={BannerData2}/>

     
  </section>
   
  )
}

export default Home