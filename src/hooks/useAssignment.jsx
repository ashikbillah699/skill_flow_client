// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
// import { useParams } from "react-router-dom";

// const useAssignment = () => {
//     const axiosSecure = useAxiosSecure()
//     const { id } = useParams();
//     console.log(id)

//     const { data: classDetails, refetch } = useQuery({
//         queryKey: ['classDetails', id],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/assigment/${id}`)
//             console.log(res.data)
//             return res.data
//         }
//     });
//     console.log(classDetails)
//     return [classDetails, refetch]
// };

// export default useAssignment;