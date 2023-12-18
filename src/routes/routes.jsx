import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Root from "../Root/Root";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Appointment from "../pages/Appointment/Appointment";
import Doctors from "../pages/Doctors/Doctors";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/doctors",
                element: <Doctors></Doctors>
            },
            {
                path: "/appointment",
                element: <Appointment></Appointment>
            }
        ],
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/login",
        element: <Login></Login>
    }
]);

export default router;