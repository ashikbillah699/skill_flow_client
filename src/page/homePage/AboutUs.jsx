import { FaUserFriends } from "react-icons/fa";


const AboutUs = () => {
    return (
        <div className="bg-white pt-16 px-6 md:px-12">
            <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 items-center gap-10">
                {/* Left Side: Image */}
                <div className="relative">
                    <img
                        src="https://edupath-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-img.d709c985.png&w=640&q=75"
                        alt="Student"
                        className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                    />
                    <div className="absolute -bottom-4 left-6 bg-white shadow-lg rounded-lg px-6 py-4 flex items-center space-x-4">
                        <FaUserFriends className="text-3xl text-red-500" />
                        <div>
                            <h3 className="text-xl font-bold text-black">2k+</h3>
                            <p className="text-gray-600">Full Time Student</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="space-y-6">
                    <h4 className="animate__animated animate__fadeInDown text-xl font-semibold border-b inline pr-5 border-black text-green-500 uppercase">
                        Know About Us
                    </h4>
                    <h2 className="animate__animated animate__fadeInDown text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Unlocking the{" "}
                        <span className="text-[#F36B27]">Power</span> of Knowledge
                    </h2>
                    <p className="text-gray-700">
                        Et purus duis sollicitudin dignissim habitant. Egestas nulla quis
                        venenatis cras sed eu massa eu faucibus. Urna fusce aenean tortor
                        pretium.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-[#F36B27] rounded-full flex items-center justify-center text-white text-lg font-bold">
                                ✓
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-black">
                                    Ignite your passion for learning
                                </h4>
                                <p className="text-gray-600">
                                    Et purus duis sollicitudin dignissim habitant. Egestas nulla
                                    quis venenatis cras sed.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-[#F36B27] rounded-full flex items-center justify-center text-white text-lg font-bold">
                                ✓
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-black">
                                    Discover the joy of lifelong learning
                                </h4>
                                <p className="text-gray-600">
                                    Et purus duis sollicitudin dignissim habitant. Egestas nulla
                                    quis venenatis cras sed.
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className="mx-auto px-3 py-2 w-max gap-3 rounded-lg bg-gray-800 text-white hover:bg-[#F36B27] duration-700">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;