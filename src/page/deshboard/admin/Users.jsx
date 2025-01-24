import { useQuery } from "@tanstack/react-query";
import { FaUser, FaUserShield } from "react-icons/fa6";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import DeshboardBanner from "../../../commonSection/DeshboardBanner";
import usersBanner from '../../../assets/usersbanner.jpg'
import Swal from 'sweetalert2'
import { useState } from "react";


const Users = () => {
    const axiosSecure = useAxiosPublic();
    const [search, setSearch] = useState('')

    const handleSearch = () => {
        refetch()
    }
    

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?search=${search}`)
            return res.data;
        }
    })

    const handleMakeAdmin = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to make him an admin!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I'm sure."
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axiosSecure.patch(`/users/admin/${id}`)
                    .then(res => {
                        refetch()
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Admin!",
                                text: "Admin has been created.",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1800
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <DeshboardBanner img={usersBanner} title={'User Management'}></DeshboardBanner>
            <div className="overflow-x-auto p-6 bg-gray-100 min-h-screen">
                <div className="flex items-center gap-2 mb-4">
                    <input
                        type='search'
                        placeholder="Search by name or email"
                        className="input input-bordered w-full"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="btn btn-outline" onClick={handleSearch}>Search</button>
                </div>
                <table className="table w-full border">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="text-center py-3">#</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th className="text-center">Profile Image</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id} className="hover:bg-gray-200">
                                <td className="text-center">{index + 1}</td>
                                <td className="flex justify-center">
                                    <img
                                        src={user.photoURL}
                                        alt="profile"
                                        className="w-12 h-12 rounded-full border border-gray-300"
                                    />
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className="text-end">
                                    {user?.role == 'admin' ? (
                                        <button
                                            className="btn btn-disabled flex gap-2 items-center bg-gray-500 text-white"
                                            disabled
                                        >
                                            <FaUserShield />
                                            Admin
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-sm flex gap-2 items-center"
                                            onClick={() => handleMakeAdmin(user._id)}
                                        >
                                            <FaUser />
                                            Make Admin
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;