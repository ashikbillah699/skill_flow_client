import { NavLink } from 'react-router-dom';
import skill_flow_logo from '../assets/SkillFolw_logo.png'
import './navbar.css'

const Navbar = () => {
    const links = <>
        <NavLink className='mx-3 hover:text-[#F36B27] duration-700 text-white' to='/'>HOME</NavLink>
        <NavLink className='mx-3 hover:text-[#F36B27] duration-700 text-white' to='/'>ALL CLASSES</NavLink>
        <NavLink className='mx-3 hover:text-[#F36B27] duration-700 text-white' to='/'>TEACH ON SKILLFLOW</NavLink>
    </>

    return (
        <div className="navbar bg-black justify-evenly max-w-screen-2xl mx-auto pt-0 fixed z-10 bg-opacity-45 top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img src={skill_flow_logo} className='w-16 h-16' alt="" />
                    <a className=" text-xl font-semibold text-gray-100"> SKILLFLOW</a>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="px-3 py-2 rounded-lg bg-gray-800 text-white hover:bg-[#F36B27] duration-700">Sign In</a>
                {/* profile */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                        <li><a> Name</a></li>
                        <li><a> Deshboard</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;