import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.jpg'
import banner5 from '../../assets/banner5.jpg'
import banner6 from '../../assets/banner6.jpg'

const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className="relative">
                    <img className="w-full h-[600px] object-cover" src={banner2} alt="" />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-y-0 ml-10 left-10 flex flex-col justify-center text-white">
                        <h2 className="md:w-6/6 text-4xl font-bold mb-4">Learn with Ease</h2>
                        <p className="md:w-6/6 text-lg">
                        Discover skills that transform your future with engaging learning experiences.
                        </p>
                        <a className="px-3 py-2 rounded-lg bg-gray-800 text-white hover:bg-[#F36B27] duration-700">Lorn more</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="w-full h-[600px] object-cover" src={banner3} alt="" />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-y-0 ml-10 left-10 flex flex-col justify-center text-white">
                        <h2 className="md:w-6/6 text-4xl font-bold mb-4">Empower Your Skills</h2>
                        <p className="md:w-6/6 text-lg">
                        SkillFlow bridges the gap between learning and achieving.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="w-full h-[600px] object-cover" src={banner4} alt="" />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-y-0 ml-10 left-10 flex flex-col justify-center text-white">
                        <h2 className="md:w-6/6 text-4xl font-bold mb-4">Master New Talents</h2>
                        <p className="md:w-6/6 text-lg">
                        SkillFlow offers tools to grow and excel in your journey.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="w-full h-[600px] object-cover" src={banner5} alt="" />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-y-0 ml-10 left-10 flex flex-col justify-center text-white">
                        <h2 className="md:w-6/6 text-4xl font-bold mb-4">Build Your Future</h2>
                        <p className="md:w-6/6 text-lg">
                        Upgrade yourself with tailored courses and expert insights.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="w-full h-[600px] object-cover" src={banner6} alt="" />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-y-0 ml-10 left-10 flex flex-col justify-center text-white">
                        <h2 className="md:w-6/6 text-4xl font-bold mb-4">Start Your Journey</h2>
                        <p className="md:w-6/6 text-lg">
                        SkillFlow simplifies learning for personal and professional success.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;