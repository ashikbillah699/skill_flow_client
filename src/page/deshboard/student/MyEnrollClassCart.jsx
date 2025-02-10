/* eslint-disable react/prop-types */

import { FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router-dom";


const MyEnrollClassCart = ({ myClass }) => {
    const { classTitle, teacherName, classImage, classId } = myClass || '';
    return (
        <div className="bg-white shadow-xl rounded-2xl group overflow-hidden transition-transform duration-300 transform hover:scale-105 p-5">
            <img src={classImage} alt={classTitle} className="w-full h-48 object-cover rounded-lg" />
            <div className="mt-4 space-y-2">
                <h2 className="text-xl font-bold text-gray-800">Title: {classTitle}</h2>
                <p className="flex items-center gap-2 text-gray-600">
                    <FaChalkboardTeacher className="text-blue-500" />
                    Teacher: {teacherName}
                </p>
                <Link to={`/deshboard/myEnrollClassDetails/${classId}`}>
                    <button className="w-full rounded-md bg-blue-500 hover:bg-blue-600 text-white">
                        Continue
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MyEnrollClassCart;