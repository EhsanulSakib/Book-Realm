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
import BookDetails from "../pages/bookDetails/BookDetails";
import BorrowBooks from "../pages/borrowBooks/BorrowBooks";
import UpdateBook from "../pages/updateBook/UpdateBook";

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
                path: '/all-books',
                element: <PrivateRouter><AllBooks></AllBooks></PrivateRouter>,
                loader: () => fetch(`${BASE_URL}/books`)
            },
            {
                path: '/add-book',
                element: <PrivateRouter><AddBooks></AddBooks></PrivateRouter>
            },
            {
                path: '/all-books/:id',
                element: <PrivateRouter><BookDetails></BookDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`${BASE_URL}/books/${params.id}`)
            },
            {
                path: '/borrowed',
                element: <PrivateRouter><BorrowBooks></BorrowBooks></PrivateRouter>
            },
            {
                path: '/update/:id',
                element: <UpdateBook></UpdateBook>,
                loader: ({ params }) => fetch(`${BASE_URL}/books/${params.id}`)
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