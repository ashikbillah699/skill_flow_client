import { Helmet } from "react-helmet";
import myEnrollClassDetailsBg from "../../../assets/myEnrollClassDetails.jpg";
import DeshboardBanner from "../../../commonSection/DeshboardBanner";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaRegClock, FaUpload } from "react-icons/fa";
import toast from "react-hot-toast";
// import { useState } from "react";


const MyEnrollClassDetails = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    // const [submited, setSubmited] = useState(false);

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
                // setSubmited(true);
            }
        }
        catch (err) {
            console.log(err.message);
            toast.error(err.message)
        }
    }

    return (
        <div>
            <Helmet>
                <title>SkillFlow  |  Class Details</title>
            </Helmet>
            <DeshboardBanner img={myEnrollClassDetailsBg} title={'My Enroll Class Details'}></DeshboardBanner>
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
                                        onClick={() => handleSubmit(assignment.classId)}
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