import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/styles/index.css'
import Header from './layouts/Header'
import Home from './pages/Home'
import Products from "./pages/Product_List";
import Footer from "./layouts/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path:"/Products",
    element: <Products/>
  },
  {
    path:"/about",
    element: <h2>about</h2>
  }
])

//main.jsx เก่า เป็น Entry point ของ <app> แต่ไปเปลี่ยนให้เป็น <Router>
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router}/>
    {/* <Footer/> */}
  </React.StrictMode>,
)
