import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/styles/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> this is home </div>
  },
  {
    path:"/about",
    element: <div> about </div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
