
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';
import CommonHead from '../../commonSection/CommonHead'
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Feedback = () => {
    const axiosPublic = useAxiosPublic();

    const {data: feedbacks= []} = useQuery({
        queryKey: ['feddbacks'],
        queryFn: async () =>{
            const res = await axiosPublic.get('/feedback');
            // console.log(res.data);
            return res.data
        }
    })
    // console.log(feedbacks);

    return (
        <div className='mb-20 mt-10'>
            <CommonHead heading={'FEEDBACK'}></CommonHead>
            <Swiper navigation={true} modules={[Navigation]} className="max-w-screen-xl mx-auto">

                {
                    feedbacks.map(review => <SwiperSlide
                        key={review?._id}
                        className='text-center px-40 space-y-4 flex flex-row'
                    >
                        <Rating
                            style={{ maxWidth: 150 }}
                            value={review.rate}
                            readOnly
                            className='mx-auto'
                        />
                        <img className='mx-auto h-20 w-20 rounded-full' src={review.photoURL} alt="" />
                        <h3 className="text-xl uppercase font-mediam text-[#F36B27]">{review.name}</h3>
                        <p className='text-sm text-gray-600'>{review.description}</p>

                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Feedback;