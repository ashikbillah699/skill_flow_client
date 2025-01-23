
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';
import CommonHead from '../../commonSection/CommonHead'

const Feedback = () => {
    const reviews = [
        {
            _id: "1",
            rating: 4.5,
            details: "Their service was excellent and the team was extremely professional. Highly recommended!",
            name: "John Doe"
        },
        {
            _id: "2",
            rating: 5,
            details: "I’m really satisfied with the product quality. It exceeded my expectations!",
            name: "Jane Smith"
        },
        {
            _id: "3",
            rating: 4,
            details: "Good experience overall, but there’s still room for improvement in customer support.",
            name: "Alex Johnson"
        },
    ]
    return (
        <div className='mb-20 mt-10'>
            <CommonHead heading={'FEEDBACK'}></CommonHead>
            <Swiper navigation={true} modules={[Navigation]} className="max-w-screen-xl mx-auto">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                        className='text-center px-40 space-y-4'
                    >
                        <Rating
                            style={{ maxWidth: 150 }}
                            value={review.rating}
                            readOnly
                            className='mx-auto'
                        />
                        <img className='mx-auto h-16 w-16' src="https://img.icons8.com/?size=50&id=38968&format=png" alt="" />
                        <p className='text-sm'>{review.details}</p>
                        <h3 className="text-xl uppercase font-mediam text-[#F36B27]">{review.name}</h3>

                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Feedback;