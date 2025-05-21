/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.jpg'
import banner5 from '../../assets/banner5.jpg'
import banner6 from '../../assets/banner6.jpg'
import { FaCaretRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className="relative">
                    <img className="w-full h-[650px] object-cover" src={banner2} alt="" />
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="absolute w-full inset-y-0 text-center flex flex-col justify-center text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInDown">Learn with <span className='text-[#F36B27]'>Ease</span></h2>
                        <p className="mx-auto w-5/6 md:w-4/6 text-lg mb-3">
                        SkillFlow empowers you with simplified learning methods, interactive tools, and career-focused courses, ensuring a seamless skill development experience.
                        </p>
                        <a className="mx-auto px-3 py-2 w-max gap-3 flex items-center rounded-lg bg-[#F36B27] text-white hover:bg-gray-800 duration-700">Lorn more <FaCaretRight /></a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="w-full h-[650px] object-cover" src={banner3} alt="" />
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="absolute w-full inset-y-0 text-center flex flex-col justify-center text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInDown">Empower Your<span className='text-[#F36B27]'>Skills</span></h2>
                        <p className="mx-auto w-5/6 md:w-4/6 text-lg mb-3">
                        Unlock your true potential with SkillFlow's cutting-edge courses, expert guidance, and personalized learning paths designed for success.
                        </p>
                        <a className="mx-auto px-3 py-2 w-max gap-3 flex items-center rounded-lg bg-[#F36B27] text-white hover:bg-gray-800 duration-700">Lorn more <FaCaretRight /></a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="w-full h-[650px] object-cover" src={banner4} alt="" />
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="absolute w-full inset-y-0 text-center flex flex-col justify-center text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInDown">Master New <span className='text-[#F36B27]'>Talents</span></h2>
                        <p className="mx-auto w-5/6 md:w-4/6 text-lg mb-3">
                        Step into the future of learning with SkillFlow’s innovative platform, where mastering talents becomes engaging, efficient, and rewarding.
                        </p>
                        <a className="mx-auto px-3 py-2 w-max gap-3 flex items-center rounded-lg bg-[#F36B27] text-white hover:bg-gray-800 duration-700">Lorn more <FaCaretRight /></a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="w-full h-[650px] object-cover" src={banner5} alt="" />
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="absolute w-full inset-y-0 text-center flex flex-col justify-center text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInDown">Build Your <span className='text-[#F36B27]'>Future</span></h2>
                        <p className="mx-auto w-5/6 md:w-4/6 text-lg mb-3">
                        SkillFlow offers advanced resources and expert-curated courses to help you excel in your goals and aspirations.
                        </p>
                        <a className="mx-auto px-3 py-2 w-max gap-3 flex items-center rounded-lg bg-[#F36B27] text-white hover:bg-gray-800 duration-700">Lorn more <FaCaretRight /></a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="w-full h-[650px] object-cover" src={banner6} alt="" />
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="absolute w-full inset-y-0 text-center flex flex-col justify-center text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInDown">Start Your <span className='text-[#F36B27]'>Journey</span></h2>
                        <p className="mx-auto w-5/6 md:w-4/6 text-lg mb-3">
                        Begin your journey to excellence with SkillFlow’s dynamic learning platform, designed to make success attainable.
                        </p>
                        <a className="mx-auto px-3 py-2 w-max gap-3 flex items-center rounded-lg bg-[#F36B27] text-white hover:bg-gray-800 duration-700">Lorn more <FaCaretRight /></a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;