import { createBrowserRouter } from 'react-router-dom'
import App from "./App"
import AuthPage from "./pages/AuthPage"
import HomePage from "./pages/HomePage"
import SellerHomepage from "./pages/SellerHomepage"
import SellerDetails from "./pages/SellerDetails"
import DetailsPage from './pages/DetailsPage'
import CheckoutForm from './components/CheckoutForm'
import CartPage from './pages/CartPage'
import CreateProduct from './pages/CreateProduct'
import OrderStatus from './pages/OrderStatus'
import CustomOrderPage from './pages/CustomOrderPage'
import { getAllItems } from './utilities/crudUtilities'
import { userConfirmation } from './utilities/authUtilities'
import './index.css';
// import { userConfirmation } from './utilities/authUtilities'

const router = createBrowserRouter([
    {
        path:"/",
        loader: getAllItems,
        element: <App />,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            {
                path:"details/:item_id", 
                element: <DetailsPage />

            },
             {
                path:"cart/",
                element: <CartPage />
            },
            {
                path:"checkout",
                element: <CheckoutForm />
            },
            {
                path:"orderstatus/:session_id/",
                element: <OrderStatus />
            },
            {
                path:"customorder/",
                element: <CustomOrderPage />
            },
            {
                path:"sellers/",
                element: <AuthPage />,
            },
            {
                path:"sellerhomepage/",
                loader: userConfirmation,
                element: <SellerHomepage />
            },
            {
                path:"sellerhomepage/sellerdetails/:item_id",
                element: <SellerDetails />
            },
            {
                path:"sellerhomepage/createproduct",
                element: <CreateProduct/>
            },
           

        ]
    }
])

export default router