import DeshboardBanner from "../../../commonSection/DeshboardBanner";
import myClassBg from '../../../assets/myClassBg.jpg'
import useAllClass from "../../../hooks/useAllClass";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import MyClassUpdate from "./MyClassUpdate";
import { Link } from "react-router-dom";


const MyClass = () => {
    const [allClass, refetch] = useAllClass()
    const axiosSecure = useAxiosSecure()

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await axiosSecure.delete(`/allclass/${id}`)
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        refetch()
                    }
                }
                catch (err) {
                    toast.error(err.message);
                }
            }
        });
    }

    return (
        <div>
            <DeshboardBanner img={myClassBg} title={'My Class'}></DeshboardBanner>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allClass.map((cls) => (
                    <div key={cls._id} className="shadow-lg rounded-xl p-4 border-2">
                        <img src={cls.image} alt={cls.title} className="rounded-lg w-full h-40 object-cover" />
                        <h3 className="text-xl font-semibold mt-3">{cls.title}</h3>
                        <p className="text-sm text-gray-500">By {cls.name} ({cls.email})</p>
                        <p className="text-lg font-medium mt-2">$ {cls.price}</p>
                        <p className="text-sm mt-1">{cls.description}</p>
                        <p className={`text-sm font-semibold mt-2 ${cls.status === 'approved' ? 'text-green-500' : 'text-yellow-500'}`}>{cls.status}</p>

                        <div className="flex justify-between items-center mt-4">
                            <button
                                onClick={() => document.getElementById('my_modal_1').showModal()}
                                className="bg-blue-500 text-white flex items-center gap-2 rounded-md px-2">
                                <FaEdit /> Update
                            </button>
                            {/* update modal */}
                            <MyClassUpdate refetch={refetch} cls={cls}></MyClassUpdate>
                            <button
                                onClick={() => handleDelete(cls._id)}
                                className="bg-red-500 text-white flex items-center gap-2 rounded-md px-2">
                                <FaTrash /> Delete
                            </button>
                        </div>

                        <Link
                            to={(`/deshboard/myClassDetails/${cls._id}`)}>
                            <button
                                disabled={cls.status !== 'approved'}
                                className="mt-3 w-full bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-md">
                                See Details
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyClass;