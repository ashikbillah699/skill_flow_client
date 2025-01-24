import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useTeachOn = () => {
    const axiosSecure = useAxiosSecure()

   const {data: teachOn = [], refetch} = useQuery({
    queryKey:['teachOn'],
    queryFn: async ()=>{
        const res = await axiosSecure.get('/teachOn');
        console.log(res.data)
        return res.data
    }
   })
   return [teachOn, refetch]
}

export default useTeachOn;