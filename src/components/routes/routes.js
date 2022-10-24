import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../authentication/Login/Login";
import Register from "../authentication/Register/Register";
import AllCourses from "../pages/Courses/AllCourses";
import CategoryDetails from "../pages/Courses/CategoryDetails";
import Courses from "../pages/Courses/Courses";
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
                path: '/coures',
                loader: () => fetch('https://learn-with-hridoy-server.vercel.app/courses/'),
                element: <Courses></Courses>
            },
            {
                path: '/categories',
                loader: () => fetch('https://learn-with-hridoy-server.vercel.app/categories'),
                element: <AllCourses></AllCourses>,
                children: [

                    {
                        path: '/categories/:name',
                        loader: ({ params }) => fetch(`https://learn-with-hridoy-server.vercel.app/categories/${params.name}`),
                        element: <CategoryDetails></CategoryDetails>
                    }
                ]
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