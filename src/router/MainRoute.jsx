import {
    createBrowserRouter} from "react-router-dom";
import MaignLayout from "../layout/MaignLayout";
import Home from "../page/homePage/Home";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import AllClasses from "../page/allClasses/AllClasses";
import ClassDetails from "../page/allClasses/ClassDetails";
import TeachOn from "../page/teachOn/TeachOn";
import PrivetRoute from "./PrivetRoute";
import DeshboardLayout from "../layout/DeshboardLayout";
import TeacherRequest from "../page/deshboard/admin/TeacherRequest";
import Users from "../page/deshboard/admin/Users";
import ReqAllClasses from "../page/deshboard/admin/ReqAllClasses";
import Profile from "../commonSection/Profile";

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
                element: <ClassDetails></ClassDetails>
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
            }
        ]
    },
    {
        path: '/deshboard',
        element: <DeshboardLayout></DeshboardLayout>,
        children:[
            {
                path:'/deshboard/teacherRequest',
                element: <TeacherRequest></TeacherRequest>
            },
            {
                path:'/deshboard/users',
                element: <Users></Users>
            },
            {
                path:'/deshboard/reqAllClasses',
                element: <ReqAllClasses></ReqAllClasses>
            },
            {
                path: '/deshboard/profile',
                element: <Profile></Profile>
            }
        ]
    }
])

export default router