import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: roles, isLoading: isRolesLoading } = useQuery({
        queryKey: [user?.email, 'roles'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/usersRole/${user.email}`);
            // console.log(res.data); 
            return res.data;
        }
    });

    return [roles, isRolesLoading]; 
};

export default useRole;