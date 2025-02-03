/* eslint-disable react-hooks/exhaustive-deps */
import { Helmet } from "react-helmet";
import BgCover from "../../commonSection/BgCover";
import teachOnBg from '../../assets/teachOn2.jpg'
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from 'sweetalert2';
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect } from "react";


const TeachOn = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [status, setStatus] = useState("")

    const featchData = async () => {
        try {
            if (user?.email) {
                const { data } = await axiosSecure.get(`/teachOnStatus/${user?.email}`)
                if (data) {
                    setIsSubmitted(true);
                    setStatus(data.status)
                }
            }
        }
        catch (err) {
            console.log(err)
            toast.error(err.message);
        }
    }

    const handleReSubmit = async() =>{
        setIsSubmitted(false)
        try{
            const {data} = await axiosSecure.delete(`/teachOnStatus/${user?.email}`)
            console.log(data)
            if(data?.deletedCount > 0){
                setStatus("pending")
            }
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        featchData()
    }, [featchData])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = user?.email;
        const teacherName = e.target.teacherName.value;
        const photoUrl = e.target.photoUrl.value;
        const title = e.target.title.value;
        const category = e.target.category.value;
        const experience = e.target.experience.value;
        const teachOnData = {
            email, teacherName, photoUrl, title, category, experience, status: 'pending', userInfo: {
                email: user?.email,
                role: user?.role,
                userId: user?._id
            }
        };
        console.table(teachOnData);
        try {
            await axiosSecure.post(`/teachOn`, teachOnData)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        setIsSubmitted(true)
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your request has been received successfully, please wait for approval.",
                            showConfirmButton: false,
                            timer: 1800
                        });
                    }
                })
        }
        catch (error) {
            console.log("Error occurred:", error.message);
            toast.error(error.message)
        }
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

            {
                !isSubmitted ? <>
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
                            </div>
                            <div className="mt-4">
                                <label className="label font-semibold">Name</label>
                                <input
                                    type="text"
                                    name="teacherName"
                                    defaultValue={user?.displayName}
                                    placeholder="Enter your name"
                                    className="input input-bordered w-full"
                                    disabled={isSubmitted}
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
                                    disabled={isSubmitted}
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
                                        disabled={isSubmitted}
                                        required
                                    />
                                </div>

                                {/* Category Field */}
                                <div className="form-control">
                                    <label className="label font-semibold">Category</label>
                                    <select
                                        name="category"
                                        className="select select-bordered w-full"
                                        disabled={isSubmitted}
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
                                        disabled={isSubmitted}
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
                                        disabled={isSubmitted}
                                    >
                                        Submit for Review
                                    </button>
                                </div>
                                {/* {isSubmitted && (
                            <div className="form-control text-center">
                                <p>Your request is under review. Wait for admin approval.</p>
                            </div>
                        )} */}
                            </div>
                        </div>
                    </form>
                </> : <>
                    <div className="flex justify-center items-center py-10">
                        {status === 'pending' && <p className="text-3xl text-yellow-500">Your request is under review. Please wait for approval.🌹</p>}
                        {status === 'accepted' && <p className="text-center text-3xl text-green-500">Hey!! { user?.displayName} <br /> You are currently a teacher!✔</p>}
                        {status === 'rejected' && (
                            <div className="text-center">
                                <p className="text-3xl text-red-500">Your request has been denied.😢</p>
                                <button onClick={handleReSubmit} className="btn btn-secondary mt-4">
                                    পুনরায় আবেদন করুন
                                </button>
                            </div>
                        )}
                    </div>
                </>
            }
        </div>
    );
};

export default TeachOn;