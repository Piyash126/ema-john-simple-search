import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Orders from "../components/orders/Orders";
import Inventory from "../components/inventory/Inventory";
import About from "../components/about/About";
import Shipping from "../components/shippning/Shipping";
import { productsAndCartLoader } from "../components/loaders/productsAndCartLoader";
import Shop from "../components/shop/Shop";

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
            element:<Inventory></Inventory>
        },
        {
        path:'/about',
        element:<About></About>
        },
        {
            path:'/shipping',
            element:<Shipping></Shipping>
        }
      ]
    }
  ])

export default router;