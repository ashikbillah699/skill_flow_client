import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllClass = () => {
    const axiosSecure = useAxiosSecure()

    const { data: allClass = [], refetch} = useQuery({
        queryKey: ['allClass'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allClass');
            return res.data
        }
    })
    return [allClass, refetch]
}

export default useAllClass;