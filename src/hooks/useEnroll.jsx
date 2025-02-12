import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useEnroll = () => {
    const axiosPublic = useAxiosPublic()

    const { data: allEnroll = [], refetch} = useQuery({
        queryKey: ['allEnroll'],
        queryFn: async () => {
            const res = await axiosPublic.get('/allEnroll');
            return res.data
        }
    })
    return [allEnroll, refetch]
};

export default useEnroll;