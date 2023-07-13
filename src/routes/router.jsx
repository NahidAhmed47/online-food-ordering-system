import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import MyOrders from "../pages/MyOrders/MyOrders";
import About from "../pages/About/About";
import Contract from "../pages/Contract/Contract";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/my-orders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contract',
                element: <Contract></Contract>
            }
        ]
    }
])

export default router;