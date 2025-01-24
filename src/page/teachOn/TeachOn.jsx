import { Helmet } from "react-helmet";
import BgCover from "../../commonSection/BgCover";
import teachOnBg from '../../assets/teachOn2.jpg'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const TeachOn = () => {
    const { user } = useContext(AuthContext)

    const handleSubmit = e => {
       e.preventDefault();
       const email = user?.email;
       const teacherName = e.target.teacherName.value;
       const photoUrl = e.target.photoUrl.value;
       const title = e.target.title.value;
       const category = e.target.category.value;
       const experience = e.target.experience.value;
       const teachOnData = {email, teacherName, photoUrl, title, category, experience, status: 'pending'};
       console.table(teachOnData);
    }
    return (
        <div>
            <Helmet>
                <title>SkillFlow  |  Teach On</title>
            </Helmet>
            <BgCover
                img={teachOnBg}
                title={'Teach On SkillFlow'}
                description={'Share your expertise, inspire learners worldwide, and earn while making an impact with SkillFlow!!'}
            ></BgCover>

            <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8 px-6 lg:px-24 py-10 bg-gray-100">
                {/* Left Section: Profile Info */}
                <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/3">
                    <div className="flex flex-col items-center">
                        <img
                            src={user?.photoURL}
                            alt="Profile"
                            className="w-24 h-24 rounded-full mb-4 border"
                        />

                        <input
                            type="email"
                            name="email"
                            value={user?.email}
                            className="btn btn-sm bg-gray-800 text-white mb-4 cursor-pointer" />
                        {/* {user?.email} */}
                    </div>
                    <div className="mt-4">
                        <label className="label font-semibold">Name</label>
                        <input
                            type="text"
                            name="teacherName"
                            defaultValue={user?.displayName}
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="label font-semibold">Photo Url</label>
                        <input
                            type="url"
                            name="photoUrl"
                            className="input input-bordered w-full"
                            defaultValue={user?.photoURL}
                            required
                        />
                    </div>
                </div>

                {/* Right Section: Form */}
                <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-2/3">
                    <div className="text-center mb-6">
                        <div className="text-2xl inline font-bold border-b px-6 pb-3 ">Apply to Teach</div>
                    </div>
                    <div className="space-y-6">
                        {/* Title Field */}
                        <div className="form-control">
                            <label className="label font-semibold">Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter your course title"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Category Field */}
                        <div className="form-control">
                            <label className="label font-semibold">Category</label>
                            <select
                                name="category"
                                className="select select-bordered w-full"
                                required
                            >
                                <option value=''>
                                    Select a category
                                </option>
                                <option value="web-development">Web Development</option>
                                <option value="digital-marketing">Digital Marketing</option>
                                <option value="graphic-design">Graphic Design</option>
                                <option value="data-science">Data Science</option>
                                <option value="business-management">Business Management</option>
                            </select>
                        </div>

                        {/* Experience Field */}
                        <div className="form-control">
                            <label className="label font-semibold">Experience</label>
                            <select
                                name="experience"
                                className="select select-bordered w-full"
                                required
                            >
                                <option value=''>
                                    Select your experience
                                </option>
                                <option value="beginner">Beginner</option>
                                <option value="mid-level">Mid-Level</option>
                                <option value="experienced">Experienced</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <div className="form-control">
                            <button
                                type="submit"
                                className="btn btn-primary w-full text-white"
                            >
                                Submit for Review
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TeachOn;