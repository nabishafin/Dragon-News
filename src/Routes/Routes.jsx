import { createBrowserRouter, Navigate, } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import CategoryNews from "../components/CategoryNews";
import AuthlayOut from "../pages/AuthlayOut";
import Login from "../components/Login";
import Register from "../components/Register";
import NewsCart from "../components/NewsCart";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "",
                element: <Navigate to={'/category/01'}></Navigate>,
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({ params }) =>
                    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)

            },
        ]
    },
    {
        path: "/about",
        element: <About></About>,
    },
    {
        path: "/career",
        element: <Career></Career>,
    },
    {
        path: "/auth",
        element: <AuthlayOut></AuthlayOut>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
        ]
    },

    {
        path: "/news/:id",
        element: <NewsCart></NewsCart>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
]);



export default router