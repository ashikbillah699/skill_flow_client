import {
    createBrowserRouter} from "react-router-dom";
import MaignLayout from "../layout/MaignLayout";
import Home from "../page/homePage/Home";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import AllClasses from "../page/allClasses/AllClasses";
import ClassDetails from "../page/allClasses/ClassDetails";
import TeachOn from "../page/teachOn/TeachOn";
import DeshboardLayout from "../layout/DeshboardLayout";
import TeacherRequest from "../page/deshboard/admin/TeacherRequest";
import Users from "../page/deshboard/admin/Users";
import ReqAllClasses from "../page/deshboard/admin/ReqAllClasses";
import Profile from "../commonSection/Profile";
import AddClass from "../page/deshboard/teacher/AddClass";
import MyClass from "../page/deshboard/teacher/MyClass";
import MyClassDetails from "../page/deshboard/teacher/MyClassDetails";
import PrivetRoute from "./PrivetRoute";
import MyEnrollClass from "../page/deshboard/student/MyEnrollClass";
import Payment from "../page/allClasses/Payment";
import ErrorPage from "../page/ErrorPage";
import MyEnrollClassDetails from "../page/deshboard/student/MyEnrollClassDetails";
import RoleRoute from "./RoleRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MaignLayout></MaignLayout>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/allClasses',
                element: <AllClasses></AllClasses>
            },
            {
                path: '/classDetails/:id',
                element: <PrivetRoute><ClassDetails></ClassDetails></PrivetRoute> 
            },
            {
                path: '/teachOn',
                element: <PrivetRoute><TeachOn></TeachOn></PrivetRoute>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/payment/:id',
                element: <Payment></Payment>
            }
        ]
    },
    {
        path: '/deshboard',
        element: <PrivetRoute><DeshboardLayout></DeshboardLayout></PrivetRoute>,
        children:[
             {
                path: '/deshboard',
                element: <PrivetRoute><RoleRoute><Profile></Profile></RoleRoute></PrivetRoute>
            },
            {
                path:'/deshboard/teacherRequest',
                element: <PrivetRoute><RoleRoute><TeacherRequest></TeacherRequest></RoleRoute></PrivetRoute>
            },
            {
                path:'/deshboard/users',
                element: <PrivetRoute><RoleRoute><Users></Users></RoleRoute></PrivetRoute>
            },
            {
                path:'/deshboard/reqAllClasses',
                element: <PrivetRoute><RoleRoute><ReqAllClasses></ReqAllClasses></RoleRoute></PrivetRoute>
            },
            {
                path:'/deshboard/addClass',
                element: <PrivetRoute><RoleRoute><AddClass></AddClass></RoleRoute></PrivetRoute>
            },
            {
                path:'/deshboard/myClass',
                element: <PrivetRoute><RoleRoute><MyClass></MyClass></RoleRoute></PrivetRoute>
            },
            {
                path: '/deshboard/myClassDetails/:id',
                element: <PrivetRoute><RoleRoute><MyClassDetails></MyClassDetails></RoleRoute></PrivetRoute>
            },
            {
                path: '/deshboard/myEnrollClass',
                element: <PrivetRoute><RoleRoute><MyEnrollClass></MyEnrollClass></RoleRoute></PrivetRoute>
            },
            {
                path:'/deshboard/myEnrollClassDetails/:id',
                element: <PrivetRoute><RoleRoute><MyEnrollClassDetails></MyEnrollClassDetails></RoleRoute></PrivetRoute>

            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router