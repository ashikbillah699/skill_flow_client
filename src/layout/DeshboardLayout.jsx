
import { NavLink, Outlet } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { MdClass, MdOutlineHomeWork, MdRequestQuote } from "react-icons/md";
import { RiMenuAddLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { HiUser } from "react-icons/hi";
import useRole from "../hooks/useRole";

const DeshboardLayout = () => {
    const [roles] = useRole();
    console.log(roles)
    return (
        <div>
            <div className="flex flex-col md:flex-row min-h-screen">
                {/* Sidebar */}
                <div className="w-full md:w-1/5 bg-gray-950 text-[#c76f44] font-black p-8">
                    <div className="flex flex-col mb-8">
                        <a className="text-2xl font-bold">SKILLFLOW</a>
                        {/* <a className="text-xl font-thin tracking-widest">RESTURENT</a> */}
                    </div>
                    <ul className="flex flex-col space-y-5">

                        <li><NavLink to='/deshboard/profile' href="#manage-bookings" className="hover:text-white duration-300 font-bold flex items-center gap-3"><ImProfile />Profile</NavLink></li>
                        {roles?.admin && <>
                            <li><NavLink to='/deshboard/teacherRequest' className="hover:text-white duration-300 font-bold flex items-center gap-3"><MdRequestQuote />  Teacher Request</NavLink></li>
                            <li><NavLink to='/deshboard/users' href="#add-items" className="hover:text-white duration-300 font-bold flex items-center gap-3"><HiUser />Users</NavLink></li>
                            <li> <NavLink to='/deshboard/reqAllClasses' href="#manage-items" className="hover:text-white duration-300 flex font-bold items-center gap-3"><MdClass />All classes</NavLink></li>
                        </>}

                        {roles?.teacher && <>
                            <li><NavLink to='/deshboard/addClass' className="hover:text-white duration-300 font-bold flex items-center gap-3"><MdRequestQuote /> Add class</NavLink></li>
                            <li><NavLink to='/deshboard/myClass' href="#add-items" className="hover:text-white duration-300 font-bold flex items-center gap-3"><HiUser />My class</NavLink></li>
                            {/* <li> <NavLink to='/deshboard/reqAllClasses' href="#manage-items" className="hover:text-white duration-300 flex font-bold items-center gap-3"><MdClass />Profile</NavLink></li> */}
                        </>}

                        {roles?.student &&
                            <li><NavLink to='/deshboard/myEnrollClass' href="#admin-home" className="hover:text-white duration-300 font-bold flex items-center gap-3"><IoHomeSharp /> My enroll class</NavLink></li>
                        }

                        <hr className=" border-gray-50" />
                        <li><NavLink to='/' href="#home" className="hover:text-white duration-300 font-bold flex items-center gap-3"><MdOutlineHomeWork />Home</NavLink></li>
                        <li><NavLink to='/allClasses' href="#shop" className="hover:text-white duration-300 font-bold flex items-center gap-3"><RiMenuAddLine />All Classes</NavLink></li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="w-full md:w-4/5 bg-gray-100 rounded">
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default DeshboardLayout;