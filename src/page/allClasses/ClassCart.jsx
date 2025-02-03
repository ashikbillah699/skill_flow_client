/* eslint-disable react/prop-types */
import { FaUserGraduate } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


const ClassCart = ({ classItem }) => {
    return (
        <div className="card bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
                <img
                    src={classItem.image}
                    alt={classItem.title}
                    className="h-52 w-full object-cover"
                />
                <span className="absolute top-2 right-2 bg-[#F36B27] text-white text-xs px-2 py-1 rounded-lg">
                    total enrold
                </span>
            </div>
            <div className="p-4 space-y-2">
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <div className="flex items-center space-x-2 text-gray-700">
                        <FaUserGraduate />
                        <p>{classItem.students} Student{classItem.students > 1 && "s"}</p>
                    </div>
                    <p className="text-sm text-gray-500">{classItem.name}</p>
                </div>
                <h2 className="text-lg font-semibold">{classItem.title}</h2>
                <p className="text-sm text-gray-500">{classItem.description.slice(0, 50)}...</p>

                <div className="flex justify-between items-center">
                    <Link to={`/classDetails/${classItem.id}`}><button className="btn-sm mt-2 gap-3 flex justify-between items-center">Enroll Now<FaArrowRightLong /></button></Link>
                    <p className="text-lg font-bold text-[#F36B27]">{classItem.price}</p>
                </div>

            </div>
        </div>
    );
};

export default ClassCart;