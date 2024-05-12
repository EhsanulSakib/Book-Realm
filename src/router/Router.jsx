import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/home/Home";
import ErrorPage from "../components/errorPage/ErrorPage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddBooks from "../pages/addBooks/AddBooks";
import PrivateRouter from "./PrivateRouter";
import AllBooks from "../pages/allBooks/AllBooks";
import { BASE_URL } from "../constVariables/constVariable";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/all-book',
                element: <PrivateRouter><AllBooks></AllBooks></PrivateRouter>,
                loader: () => fetch(`${BASE_URL}/books`)
            },
            {
                path: '/add-book',
                element: <PrivateRouter><AddBooks></AddBooks></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;