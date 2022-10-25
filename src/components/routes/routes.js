import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../authentication/Login/Login";
import Register from "../authentication/Register/Register";
import CategoryList from "../pages/Courses/CategoryList";
import CourseLayout from "../pages/Courses/CourseLayout";
import Home from "../pages/Home/Home";
import Error from "../pages/shared/Error/Error";
import CourseInfo from "../pages/Courses/CourseInfo";
import PrivateRoute from "./PrivateRoute";
import Checkout from "../pages/Checkout/Checkout";
import Blog from "../pages/Blog/Blog";
import AllCourses from "../pages/Courses/AllCourses";
import Congratulations from "../pages/Checkout/Congratulations";

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
                element: <AllCourses></AllCourses>
            },
            {
                path: '/course-details/:id',
                loader: ({ params }) => fetch(`https://learn-with-hridoy-server.vercel.app/courses/${params.id}`),
                element: <CourseInfo></CourseInfo>
            },
            {
                path: '/course-details/checkout/:id',
                loader: ({ params }) => fetch(`https://learn-with-hridoy-server.vercel.app/courses/${params.id}`),
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: '/congratulations',
                element: <Congratulations></Congratulations>
            },
            {
                path: '/categories',
                element: <CourseLayout></CourseLayout>,
                children: [

                    {
                        path: '/categories/:name',
                        loader: ({ params }) => fetch(`https://learn-with-hridoy-server.vercel.app/categories/${params.name}`),
                        element: <CategoryList></CategoryList>
                    }

                ]
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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