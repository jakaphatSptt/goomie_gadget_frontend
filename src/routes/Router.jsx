import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Product_List'
import User_Profile from '../pages/User_Profile'

function Router() {
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
        },
        {
          path:"/user_profile",
          element: <User_Profile/>
        },
      ])
  return <RouterProvider router = {router} />
}

export default Router