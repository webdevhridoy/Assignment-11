import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../authentication/Login/Login";
import Register from "../authentication/Register/Register";
import Home from "../pages/Home/Home";
import Error from "../pages/shared/Error/Error";

export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }


]);