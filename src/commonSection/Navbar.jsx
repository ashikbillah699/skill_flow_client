import { Link, NavLink } from 'react-router-dom';
import skill_flow_logo from '../assets/SkillFolw_logo.png'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user,logOut } = useContext(AuthContext);
    console.log(user);

    const links = <>
        <NavLink className='mx-3 hover:text-[#F36B27] duration-700 text-white' to='/'>HOME</NavLink>
        <NavLink className='mx-3 hover:text-[#F36B27] duration-700 text-white' to='/allClasses'>ALL CLASSES</NavLink>
        <NavLink className='mx-3 hover:text-[#F36B27] duration-700 text-white' to='/teachOn'>TEACH ON SKILLFLOW</NavLink>
    </>

    return (
        <div className="navbar bg-black justify-evenly w-full mx-auto pt-0 fixed z-20 bg-opacity-45 top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
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
                        className="menu menu-sm dropdown-content space-y-3 rounded-box z-[1] mt-3 w-52 p-2 bg-gray-800">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center animate__animated animate__fadeInDown'>
                    <img src={skill_flow_logo} className='w-16 h-16' alt="" />
                    <a className=" text-xl font-semibold text-gray-100"> SKILLFLOW</a>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end animate__animated animate__fadeInDown">
                {user && user ? <>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user && user?.photoURL} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                            <li><a>{user && user?.displayName}</a></li>
                            <li><NavLink to='/deshboard'> Deshboard</NavLink></li>
                            <li><a onClick={logOut}>Logout</a></li>
                        </ul>
                    </div>
                </>
                    : <Link to='/login' className="px-3 py-2 rounded-lg  text-white hover:bg-gray-800 bg-[#F36B27] duration-700">Sign In</Link>
                }
                {/* profile */}

            </div>
        </div>
    );
};

export default Navbar;