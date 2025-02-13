/* eslint-disable react/prop-types */
import { MdBrowserUpdated } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import toast from "react-hot-toast";


const MyClassUpdate = ({ cls, refetch, modalId }) => {
    const { title, name, email, price, description, image, _id } = cls;

    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const title = e.target.title.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const image = e.target.image.value;
        const fromData = { title, name, email, price, description, image, status: 'pending' };

        try {
            const { data } = await axiosSecure.put(`/classUpdate/${_id}`, fromData);
            if (data.matchedCount > 0) {
                document.getElementById(modalId).close()
                Swal.fire({
                    title: "Updated",
                    icon: "success",
                    position: "center"
                });
                navigate('/deshboard/myClass')
            }
            refetch()
        }
        catch (err) {
            toast.error(err.message);
        }

    };

    return (
        <dialog id={modalId} className="modal">
            <div className="modal-box  max-w-2xl mx-auto">
                <div className="flex justify-center items-center min-h-screen p-4">
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
                        <h2 className="text-2xl font-semibold text-center mb-4">Update your Class</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="label">Title*</label>
                                <input type="text" name="title" defaultValue={title} required className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="label">Name*</label>
                                <input type="text" name="name"
                                    defaultValue={name} disabled
                                    className="input input-bordered w-full bg-gray-200" />
                            </div>
                            <div>
                                <label className="label">Email*</label>
                                <input type="email" name="email"
                                    defaultValue={email} disabled
                                    className="input input-bordered w-full bg-gray-200" />
                            </div>
                            <div>
                                <label className="label">Price*</label>
                                <input type="number" name="price" defaultValue={price} required className="input input-bordered w-full" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="label">Description*</label>
                                <textarea name="description" defaultValue={description} required className="textarea textarea-bordered w-full" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="label">Image Url</label>
                                <input type="url" name="image" defaultValue={image} required className="file-input file-input-bordered w-full" />
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button type="submit" className="btn btn-primary flex items-center gap-2">
                                Update <MdBrowserUpdated />
                            </button>
                        </div>
                    </form>
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default MyClassUpdate;