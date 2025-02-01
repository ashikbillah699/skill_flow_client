/* eslint-disable react/prop-types */
import { useContext } from "react";
import useRole from "../hooks/useRole";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const RoleRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [roles, isRolesLoading] = useRole();
    const location = useLocation();

    if(loading || isRolesLoading){
        return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if(user && roles){
        return children
    }

    return <Navigate to={'/login'}  state={{ from: location }} replace ></Navigate>;
};

export default RoleRoute;