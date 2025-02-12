// import { SwiperSlide, Swiper } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
import CommonHead from "../../commonSection/CommonHead";
import ClassCart from "../allClasses/ClassCart";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from "react-router-dom";

const HighlightClass = () => {
    const axiosPublic = useAxiosPublic();

    const { data: highlightClass = [], isLoading } = useQuery({
        queryKey: ['highlightClass'],
        queryFn: async () => {
            const res = await axiosPublic.get('/HighliteClass');
            return res.data
        }
    })

    if (isLoading) return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>

    return (
        <div className="max-w-screen-xl mx-auto py-10">
            <CommonHead heading={'🌟 Student’s Favorite Classes'}></CommonHead>
            {
                highlightClass.length == 0 ? <p className="text-3xl col-span-3 text-center text-green-500">No class.🚩</p>
                    :
                    <div className="max-w-screen-xl mx-auto p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {highlightClass.map((classItem) => <ClassCart key={classItem._id} classItem={classItem}></ClassCart>)}
                        </div>
                    </div>
            }
           <Link to={`/allClasses`} className="flex justify-center"> <button className="btn btn-outline text-[#F36B27] mx-auto">All Classes</button></Link>
        </div>
    );
};

export default HighlightClass;