import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUser = () => {
    const axiosSecure = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allUsers`)
            return res.data;
        }
    })
    return [users, refetch]
};

export default useUser;