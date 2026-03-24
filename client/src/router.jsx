import { createBrowserRouter } from 'react-router-dom'
import App from "./App"
import AuthPage from "./pages/AuthPage"
import HomePage from "./pages/HomePage"
import SellerHomepage from "./pages/SellerHomepage"
import DetailsPage from './pages/DetailsPage'
import CartPage from './pages/CartPage'
import { getAllItems } from './utilities/crudUtilities'
// import { userConfirmation } from './utilities/authUtilities'

const router = createBrowserRouter([
    {
        path:"/",
        loader: getAllItems,
        element: <App/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            {
                path:"details",
                element: <DetailsPage />
            },
            {
                path:"cart",
                element: <CartPage />
            },
            {
                path:"sellers",
                // loader: userConfirmation,
                element: <AuthPage />
            },
            {
                path:"sellerhomepage",
                // loader: userConfirmation,
                element: <SellerHomepage />
            }
        ]
    }
])

export default router