import {
    createBrowserRouter} from "react-router-dom";
import MaignLayout from "../layout/MaignLayout";
import Home from "../page/homePage/Home";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import AllClasses from "../page/allClasses/AllClasses";

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
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router