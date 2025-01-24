
import { NavLink, Outlet } from "react-router-dom";
import {FaBookOpenReader, FaCartShopping } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { MdClass, MdOutlineHomeWork, MdRateReview, MdRequestQuote, MdWorkHistory } from "react-icons/md";
import { RiMenuAddLine, RiReservedFill } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { HiUser } from "react-icons/hi";

const DeshboardLayout = () => {
    const isAdmin = true
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
                        {isAdmin ? <>
                            <li><NavLink to='/deshboard/teacherRequest' className="hover:text-white duration-300 font-bold flex items-center gap-3"><MdRequestQuote />  Teacher Request</NavLink></li>
                            <li><NavLink to='/deshboard/users' href="#add-items" className="hover:text-white duration-300 font-bold flex items-center gap-3"><HiUser />Users</NavLink></li>
                            <li> <NavLink to='/deshboard/reqAllClasses' href="#manage-items" className="hover:text-white duration-300 flex font-bold items-center gap-3"><MdClass />All classes</NavLink></li>
                        </>
                            : <>
                                <li><NavLink to='/deshboard/userHome' href="#admin-home" className="hover:text-white duration-300 font-bold flex items-center gap-3"><IoHomeSharp />User Home</NavLink></li>
                                <li><NavLink to='/deshboard/reservation' href="#add-items" className="hover:text-white duration-300 font-bold flex items-center gap-3"><RiReservedFill />Reservation</NavLink></li>
                                <li><NavLink to='/deshboard/paymentHistory' href="#add-items" className="hover:text-white duration-300 font-bold flex items-center gap-3"><MdWorkHistory />Payment Hisory</NavLink></li>
                                <li> <NavLink to='/deshboard/myCart' href="#manage-items" className="hover:text-white duration-300 flex font-bold items-center gap-3"><FaCartShopping />My Cart</NavLink></li>
                                <li><NavLink to='/deshboard/addReview' href="#manage-bookings" className="hover:text-white duration-300 font-bold flex items-center gap-3"><MdRateReview />Add Review</NavLink></li>
                                <li><NavLink to='/deshboard/myBooking' href="#all-users" className="hover:text-white duration-300 font-bold flex items-center gap-3"><FaBookOpenReader />My Booking</NavLink></li>

                            </>
                        }
                        <hr className=" border-gray-50" />
                        <li><NavLink to='/' href="#home" className="hover:text-white duration-300 font-bold flex items-center gap-3"><MdOutlineHomeWork />Home</NavLink></li>
                        <li><NavLink to='/allClasses' href="#shop" className="hover:text-white duration-300 font-bold flex items-center gap-3"><RiMenuAddLine />All Classes</NavLink></li>
                        {/* <li><NavLink to='/ourShop/salad' href="#menu" className="hover:text-white duration-300 font-bold flex items-center gap-3"><FaShoppingBag />Our Shop</NavLink></li>
                        <li><NavLink to='/contactUs' href="#contact" className="hover:text-white duration-300 font-bold flex items-center gap-3"><GrContact />Contact Us</NavLink></li> */}
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