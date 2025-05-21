// import teacher from '../../assets/teacher.jpg'
import { Link } from 'react-router-dom';
import teacherbg from '../../assets/banner4.jpg'

const InspirTeachers = () => {
    return (
        <div className="mt-20 relative bg-cover bg-center bg-no-repeat py-16 px-8 md:px-16 bg-fixed" style={{ backgroundImage: `url('${teacherbg}')` }}>
            <div className="absolute inset-0 bg-black bg-opacity-80 rounded-xl"></div>
            <div className="relative grid lg:grid-cols-3 gap-12 items-center max-w-screen-xl mx-auto">

                {/* Left Section (Content) */}
                <div className="col-span-2  space-y-8 text-white">
                    <h1 className="text-3xl md:text-5xl font-bold leading-snug">
                        Are You Passionate About Teaching?
                    </h1>
                    <p className="text-lg">
                        Join us today and share your knowledge with thousands of eager learners
                        across the globe! Inspire, teach, and earn while making a difference
                        from the comfort of your home.
                    </p>
                    <Link to='/teachOn'>
                        <button className="btn bg-gradient-to-r from-[#f6d365] to-[#fda085] text-black px-8 py-4 rounded-lg shadow-lg hover:opacity-90 transition duration-300">
                            Become a Teacher Now
                        </button>
                    </Link>
                </div>
                {/* Right Section (Image) */}
                <div className="col-span-1">
                    <img
                        src='https://edulearn-lms-admin-template.multipurposethemes.com/images/front-end-img/about/4f.png'
                        alt="Teacher Illustration"
                        className="mx-auto text-center w-80 md:w-80 rounded-xl"
                    />

                </div>

            </div>
        </div>


    );
};

export default InspirTeachers;