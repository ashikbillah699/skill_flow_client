import DeshboardBanner from "../../../commonSection/DeshboardBanner";
import addClassBg from "../../../assets/addClassBg.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const title = e.target.title.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const image = e.target.image.value;
        const countAssignmnet = parseInt(0);
        const countEnroll = parseInt(0)
        const fromData = { title, name, email, price, description, image, countAssignmnet, status: 'pending', countEnroll , submitCount: parseInt(0) };
console.log(fromData)
        Swal.fire({
            title: "Do you want to add this class?",
            showDenyButton: true,
            confirmButtonText: "Add",
            denyButtonText: `Don't add`
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await axiosSecure.post('/addClass', fromData);
                    console.log(data)
                    if (data.insertedId) {
                        Swal.fire("Added! Wait for admin approval", "", "success");
                        e.target.reset()
                        navigate('/deshboard/myClass')
                    }
                }
                catch (err) {
                    toast.error(err.message);
                }
            }
        });
    };

    return (
        <div>
            <DeshboardBanner img={addClassBg} title={'Add Class'}></DeshboardBanner>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
                    <h2 className="text-2xl font-semibold text-center mb-4">Add New Class</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="label">Title*</label>
                            <input type="text" name="title" required className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label">Name*</label>
                            <input type="text" name="name" defaultValue={user?.displayName || ''} disabled className="input input-bordered w-full bg-gray-200" />
                        </div>
                        <div>
                            <label className="label">Email*</label>
                            <input type="email" name="email" defaultValue={user?.email || ''} disabled className="input input-bordered w-full bg-gray-200" />
                        </div>
                        <div>
                            <label className="label">Price*</label>
                            <input type="number" name="price" required className="input input-bordered w-full" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="label">Description*</label>
                            <textarea name="description" required className="textarea textarea-bordered w-full" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="label">Image Url</label>
                            <input type="url" name="image" required className="file-input file-input-bordered w-full" />
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button type="submit" className="btn btn-primary flex items-center gap-2">
                            Add Class <AiOutlineArrowRight />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;