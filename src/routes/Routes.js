import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Orders from "../components/orders/Orders";
import Inventory from "../components/inventory/Inventory";
import About from "../components/about/About";
import Shipping from "../components/shippning/Shipping";
import { productsAndCartLoader } from "../components/loaders/productsAndCartLoader";
import Shop from "../components/shop/Shop";
import Signup from "../components/signup/Signup";
import Login from "../components/login/Login";
import PrivateRoute from "./PrivateRoute";

const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:productsAndCartLoader,
         element:<Shop></Shop>
        },
        {
            path:'/orders',
            loader:productsAndCartLoader,
            element:<Orders></Orders>,
        },
        {
            path:'/inventory',
            element:<PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
        path:'/about',
        element:<About></About>
        },
        {
            path:'/shipping',
            element:<PrivateRoute><Shipping></Shipping></PrivateRoute>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
      },
      {
        path:'/login',
        element:<Login></Login>
    }
      ]
    }
  ])

export default router;