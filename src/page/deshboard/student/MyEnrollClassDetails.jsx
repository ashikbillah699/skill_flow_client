import { Helmet } from "react-helmet";
import myEnrollClassDetailsBg from "../../../assets/myEnrollClassDetails.jpg";
import DeshboardBanner from "../../../commonSection/DeshboardBanner";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaRegClock, FaUpload } from "react-icons/fa";
import toast from "react-hot-toast";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAllClass from "../../../hooks/useAllClass";


const MyEnrollClassDetails = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const [rating, setRating] = useState(0);
    const { user } = useContext(AuthContext);
    const [allClass] = useAllClass()
    const ClassTitle = allClass.find(singleClass => singleClass._id === id)?.title || 'Class Not Found';

    const { data: myClassesDetails = [], refetch, isLoading } = useQuery({
        queryKey: ['myClassesDetails', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/enrollClassAssignment/${id}`);
            return res.data;
        }
    })

    refetch()
    if (isLoading) return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>

    const handleSubmit = async (id) => {
        try {
            const { data } = await axiosSecure.patch(`/submitCount/${id}`)
            console.log(data)
            if (data.matchedCount > 0) {
                toast.success('Successfully submited your assignment!!')
            }
        }
        catch (err) {
            console.log(err.message);
            toast.error(err.message)
        }
    }

    const handleFeedback = async(e) => {
        e.preventDefault();
        const name = user?.displayName;
        const photoURL = user?.photoURL;
        const classTilte = ClassTitle;
        const description = e.target.description.value;
        const rate = rating;

        const feedbackData = {name, photoURL, classTilte, description, rate};
        console.table(feedbackData);

        try{
            const {data} = await axiosSecure.post('/feedback', feedbackData);
            if(data.insertedId){
                toast.success('Posted your feedback!!')
                document.getElementById("my_modal_1").close();
            }
        }
        catch(err){
            console.log(err.message);
            toast.error(err.message);
        }
    
    }

    return (
        <div>
            <Helmet>
                <title>SkillFlow  |  Class Details</title>
            </Helmet>
            <DeshboardBanner img={myEnrollClassDetailsBg} title={'My Enroll Class Details'}></DeshboardBanner>
            {/* feedback */}
            {/* <button className="btn btn-outline btn-info btn-sm m-6 w-40">TER </button> */}
            <button className="btn btn-outline btn-info btn-sm m-6 w-40" onClick={() => document.getElementById('my_modal_1').showModal()}>TER</button>
            <dialog id="my_modal_1" className="modal">
                <form onSubmit={handleFeedback} className="modal-box">
                    <div className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="block font-medium text-gray-700">Name</label>
                            <input type="text" disabled value={user?.displayName} placeholder="Enter your name" className="input input-bordered w-full" />
                        </div>

                        {/* Image */}
                        <div>
                            <label className="block font-medium text-gray-700">Image URL</label>
                            <input type="text" disabled value={user?.photoURL} placeholder="Enter image URL" className="input input-bordered w-full" />
                        </div>

                        {/* Title */}
                        <div>
                            <label className="block font-medium text-gray-700">Class Title</label>
                            <input type="text" disabled value={ClassTitle} placeholder="Enter class title" className="input input-bordered w-full" />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block font-medium text-gray-700">Feedback</label>
                            <textarea
                                name="description"
                                placeholder="Write your feedback"
                                className="textarea textarea-bordered w-full"
                            ></textarea>
                        </div>

                        {/* Rating */}
                        <div>
                            <label className="block font-medium text-gray-700">Rating</label>
                            <div className="flex items-center gap-2">
                                <Rating value={rating} onChange={setRating} className="text-yellow-500" />
                                <span className="text-gray-600">{rating} Stars</span>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button className="btn btn-primary btn-sm w-full">Send Feedback</button>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </form>
            </dialog>

            {/* all assignment */}
            <div className="overflow-x-auto p-6">
                <table className="table w-full bg-white shadow-lg rounded-xl">
                    <thead className="bg-blue-500 text-white">
                        <tr>
                            <th className="p-3 text-left">Title</th>
                            <th className="p-3 text-left">Description</th>
                            <th className="p-3 text-left">Deadline</th>
                            <th className="p-3 text-left">Submission</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myClassesDetails.map((assignment) => (
                            <tr key={assignment._id} className="border-b hover:bg-gray-100">
                                <td className="p-3 font-semibold text-gray-800">
                                    {assignment.title}
                                </td>
                                <td className="p-3 text-gray-600">{assignment.description}</td>
                                <td className="p-3 items-center w-40 text-red-500 font-medium space-x-2">
                                    <FaRegClock className="inline" /> {assignment.deadline}
                                </td>
                                <td className="p-3 flex flex-col gap-2">
                                    <input
                                        type="file"
                                        required
                                        className="file-input file-input-sm w-full border border-gray-300 rounded-md"
                                    />
                                    <button
                                        // disabled={submited}
                                        onClick={() => handleSubmit(assignment.classId, assignment._id)}
                                        className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed">
                                        <FaUpload /> Submit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnrollClassDetails;