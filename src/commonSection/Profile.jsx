
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useContext} from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure(); 

    const { data: currentUserData = {} } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            if (!user?.email) throw new Error("User email not available");
            const res = await axiosSecure.get(`/users/${user.email}`);
            return res.data;
        },
        enabled: !!user?.email, // Prevent request if email is not available
    });



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-lg w-full bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Banner Section */}
                <div className="relative bg-blue-500 h-28">
                    <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2">
                        <img
                            src={currentUserData.photoURL}
                            alt="User"
                            className="w-28 h-28 rounded-full border-4 border-white shadow-md"
                        />
                    </div>
                </div>

                {/* User Info Section */}
                <div className="mt-16 px-6 pb-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">{currentUserData.name}</h2>
                    <p className="text-sm text-gray-500">{currentUserData.role}</p>

                    <div className="grid grid-cols-2 gap-4 mt-6 text-left">
                        {/* Phone Information */}
                        <div className="flex items-center gap-3">
                            <FaPhoneAlt className="text-orange-500" />
                            <div>
                                <p className="text-gray-500 text-sm">Phone:</p>
                                <p className="font-medium text-gray-700">{currentUserData.phoneNumber}</p>
                            </div>
                        </div>

                        {/* Email Information */}
                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-orange-500" />
                            <div>
                                <p className="text-gray-500 text-sm">Email:</p>
                                <p className="font-medium text-gray-700">{currentUserData.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;