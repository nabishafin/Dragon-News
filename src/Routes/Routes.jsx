import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/about",
        element: <About></About>,
    },
    {
        path: "/career",
        element: <Career></Career>,
    },
]);



export default router