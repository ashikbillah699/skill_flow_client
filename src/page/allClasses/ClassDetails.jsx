import { Helmet } from "react-helmet";
import BgCover from "../../commonSection/BgCover";
// import AllClassesBg from '../../assets/AllClassesBg.jpg'
import { FaPlayCircle } from "react-icons/fa";


const ClassDetails = () => {
    return (
        <div>
            <Helmet>
                <title>SkillFlow  |  AllCalsses</title>
            </Helmet>
            <BgCover
                img='https://cdn.pixabay.com/photo/2022/01/23/18/59/mathematics-6961680_1280.jpg'
                title={'All Classes'}
                description={'Explore top-notch classes and grow your skills with expert guidance. Start your journey now!'}
            ></BgCover>
            <div className="container mx-auto p-4">
                {/* Page Title and Overview */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Course Details</h1>
                    <div className="flex space-x-4">
                        <button className="btn btn-primary">Overview</button>
                        <button className="btn btn-outline">Curriculum</button>
                        <button className="btn btn-outline">Instructor</button>
                        <button className="btn btn-outline">Reviews</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column: Course Information */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Course Description</h2>
                        <p className="mb-4">
                            Aliquam eros justo, posuere loborti vive rra laoreet mattii ullamcorper
                            viverra laoreet posu er viverra. Aliquam eros justo, posu lobortis non,
                            vive rra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam
                            es justo, posuere loborti viverra laoreet.
                        </p>
                        <h3 className="font-semibold mb-2">What You’ll Learn?</h3>
                        <ul className="list-disc ml-6 mb-4">
                            <li>Nurturing Young Minds</li>
                            <li>Building a Bright Future Together</li>
                            <li>Unlocking Potential Through Education</li>
                        </ul>
                    </div>

                    {/* Right Column: Course Details */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <div className="flex justify-between items-center mb-4">
                            <img
                                src="https://cdn.pixabay.com/photo/2022/01/23/18/59/mathematics-6961680_1280.jpg"
                                alt="Instructor"
                                className="w-24 h-24 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="text-lg font-semibold">Devon Lane</h4>
                                <p className="text-sm text-gray-500">Instructor</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold">Price: $20</h3>
                            <button className="btn btn-success">Pay Now</button>
                        </div>
                        <div className="text-center mt-4">
                            <button className="btn btn-primary text-white">
                                <FaPlayCircle className="mr-2" />
                                Play Course Preview
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;