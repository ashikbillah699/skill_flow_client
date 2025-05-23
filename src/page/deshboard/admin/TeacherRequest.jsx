import { FaCheck, FaTimes } from "react-icons/fa";
import useTeachOn from "../../../hooks/useTeachOn";
import DeshboardBanner from "../../../commonSection/DeshboardBanner";
import teacherReq from '../../../assets/teacherReq3.jpg'
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";


const TeacherRequest = () => {
    const axiosSecure = useAxiosSecure()

    const [teachOn, refetch] = useTeachOn()
    // refetch()
    console.log(teachOn)

    // approved functionality
    const handleApprove = async(id, userInfo)=>{
        console.log(id)
        await axiosSecure.patch(`/teachOnAccepted/${id}`, {userInfo})
        .then(res =>{
            if(res.data.modifiedCount){
                console.log(res.data)
                toast.success('Approved Successfully! This user is now a teacher!!')
                refetch();
            }
        })
    }
    
    // reject functionality
    const handleReject = async(id, userInfo)=>{
        console.log(id)
        await axiosSecure.patch(`/teachOnRejected/${id}`, {userInfo})
        .then(res =>{
            if(res.data.modifiedCount){
                console.log(res.data)
                toast.success('Rejected Successfully!!')
                refetch();
            }
        })
    }

    return (
        <div>
            <DeshboardBanner img={teacherReq} title={'Teacher Requests'}></DeshboardBanner>
            <div className="px-6 lg:px-16 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teachOn.length == 0 ? <p className="text-3xl col-span-3 text-center text-green-500">Not a request to become a teacher.</p> 
                    : teachOn.map((request) => (
                        <div
                            key={request._id}
                            className="card shadow-lg rounded-lg bg-white hover:shadow-xl transition-transform transform hover:-translate-y-2"
                        >
                            {/* Image and Name */}
                            <div className="flex items-center p-4">
                                <img
                                    src={request.photoUrl}
                                    alt={request.teacherName}
                                    className="w-16 h-16 rounded-full border shadow-sm"
                                />
                                <div className="ml-4">
                                    <h3 className="text-xl font-semibold">{request.teacherName}</h3>
                                    <p className="text-sm text-gray-500">{request.experience}</p>
                                </div>
                            </div>
                            {/* Details */}
                            <div className="p-4 border-t">
                                <p>
                                    <span className="font-bold">Title: </span>
                                    {request.title}
                                </p>
                                <p>
                                    <span className="font-bold">Category: </span>
                                    {request.category}
                                </p>
                                <p>
                                    <span className="font-bold">Status: </span>
                                    <span
                                        className={`px-2 py-1 rounded ${request.status === "pending"
                                            ? "bg-yellow-100 text-yellow-800"
                                            : "bg-red-100 text-red-800"
                                            }`}
                                    >
                                        {request.status}
                                    </span>
                                </p>
                            </div>
                            {/* Buttons */}
                            <div className="card-actions justify-end p-4 border-t">
                                <button
                                    className="btn btn-success btn-sm flex items-center gap-2"
                                    disabled={request.status === "rejected" || request.status === "accepted"}
                                    onClick={()=>handleApprove(request._id, request.userInfo)}
                                >
                                    <FaCheck />
                                    Approve
                                </button>
                                <button
                                    className="btn btn-error btn-sm flex items-center gap-2"
                                    disabled={request.status === "rejected"}
                                    onClick={()=>handleReject(request._id, request.userInfo)}
                                >
                                    <FaTimes />
                                    Reject
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default TeacherRequest;