import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import detailsBg from '../../../assets/addClassBg.jpg'
import toast from "react-hot-toast";
import AssignmentList from "./AssignmentList";
import useAllClass from "../../../hooks/useAllClass";


const MyClassDetails = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const [modalOpen, setModalOpen] = useState(false);
    const [allClass] = useAllClass()
    const countEnroll = allClass.find(singleClass => singleClass._id === id)?.countEnroll || 'Class Not Found';
    const submitCount =  allClass.find(singleClass => singleClass._id === id)?.submitCount || 'Class Not Found';

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const title = e.target.title.value;
        const deadline = e.target.deadline.value;
        const description = e.target.description.value;
        const classId = id
        const assignmentData = {title, deadline, description, classId }

        if (new Date(deadline) <= new Date()) {
            return toast.error('please add a valid deadline');
        }

        try{
            const {data} = await axiosSecure.post('/assigment', assignmentData);
            if(data.insertedId){
                toast.success('Assignment successfully added!!')
                setModalOpen(false);
                refetch()
            }
        }
        catch(err){
            toast.error(err.message);
        }
    }

    // fatch all data
    const { data: classDetails = [], refetch } = useQuery({
        queryKey: ['classDetails', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/assigment/${id}`)
            return res.data
        }
    });

    // Sample data (you can replace these with actual data from your database)
   

    return (
        <div className="">
            <section className="bg-cover bg-center p-8 mb-12" style={{ backgroundImage: `url(${detailsBg})` }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    <div className="card h-40 w-full bg-green-100 shadow-xl ">
                        <div className="card-body text-center">
                            <h2 className="text-xl font-semibold">Total Enrollment</h2>
                            <p className="text-3xl font-bold">{countEnroll}<br /> Students</p>
                        </div>
                    </div>
                    <div className="card h-40 w-full bg-yellow-100 shadow-xl ">
                        <div className="card-body text-center">
                            <h2 className="text-xl font-semibold">Total Assignment</h2>
                            <p className="text-3xl font-bold">{classDetails?.length}<br /> Assignments</p>
                        </div>
                    </div>
                    <div className="card h-40 w-full bg-purple-200 shadow-xl ">
                        <div className="card-body text-center">
                            <h2 className="text-xl font-semibold">Total Submission</h2>
                            <p className="text-3xl font-bold">{submitCount}<br /> Submissions</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Add Assignment Section */}
            <section className="px-8">
                <button
                    className="btn btn-primary flex items-center gap-2 mb-6"
                    onClick={() => setModalOpen(true)}
                >
                    <FaPlusCircle />
                    Create Assignment
                </button>

                {/* Custom Modal */}
                {modalOpen && (
                    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg w-96">
                            <h2 className="text-xl font-semibold mb-4">Add New Assignment</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">Title</label>
                                    <input
                                        type="text"
                                        name='title'
                                        className="input input-bordered w-full"
                                        placeholder="Enter title"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">Deadline</label>
                                    <input
                                        name='deadline'
                                        // defaultValue={new Date()}
                                        type="date"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium">Description</label>
                                    <textarea
                                        name='description'
                                        className="textarea textarea-bordered w-full"
                                        placeholder="Enter description"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-full">
                                    Add Assignment
                                </button>
                            </form>
                            <button
                                className="btn btn-secondary w-full mt-4"
                                onClick={() => setModalOpen(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </section>
            <section>
                <AssignmentList classDetails={classDetails}></AssignmentList>
            </section>
        </div>
    );
};

export default MyClassDetails;