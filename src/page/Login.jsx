import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import loginImg from '../assets/authentication2 1.png'
import loginBg from '../assets/Rectangle 75.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Login = () => {
    const {createLogin,googleSignUp, userProfile} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic()


    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            createLogin(email, password)
                .then(result => {
                    console.log(result.user)
                    console.log(result.user)
                    toast.success('successfully login')
                    e.target.reset()
                    navigate(location.state?.from?.pathname || "/")
                })
                .catch(err => {
                    console.log(err.message);
                    toast.error(err.message);
                })
        }
        catch (err) {
            console.log(err.message)
        }
    }

    const handleGoogle = () => {
        try {
            googleSignUp()
                .then(async (result) => {
                    console.log(result.user)
                    userProfile(result.user.displayName, result.user.photoURL)
                    console.log(result.user.displayName, result.user.photoURL)
                    const userInfo = {
                        name: result.user?.displayName,
                        email:result.user?.email,
                        photoURL: result.user?.photoURL,
                        phoneNumber:result.user?.phoneNumber,
                        role: 'student'
                    }
                    
                    const res = await axiosPublic.post('/user', userInfo)
                    console.log(res.data)
                    toast.success('successfully sign up')
                    navigate(location.state?.from?.pathname || "/")
                })
                .catch(err => {
                    console.log(err.message)
                    toast.error(err.message)
                })
        }
        catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen p-4" style={{ backgroundImage: `url(${loginBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Helmet>
                <title>SkillFlow | Sign In</title>
            </Helmet>
            <div className="flex shadow-2xl rounded-lg w-full max-w-4xl overflow-hidden" style={{ backgroundImage: `url(${loginBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                {/* Left Side - Image */}
                <div className="hidden md:flex md:w-1/2 justify-center items-center" >
                    <img
                        src={loginImg}
                        alt="Login Illustration"
                        className="object-contain max-h-80"
                    />
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-center mb-8">Login</h2>

                    {/* Login Form */}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Type here"
                                className="input input-bordered w-full"
                                required
                                style={{ fontFamily: "Open Sans, sans-serif" }}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                required
                                style={{ fontFamily: "Open Sans, sans-serif" }}
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button className="btn bg-yellow-600 text-white w-full hover:bg-yellow-700">
                                Sign In
                            </button>
                        </div>
                    </form>

                    {/* New Account */}
                    <p className="text-center text-sm mt-4">
                        New here?{" "}
                        <Link
                            to="/signUp"
                            className="text-yellow-500 font-medium hover:underline"
                        >
                            Create a New Account
                        </Link>
                    </p>

                    {/* Social Login */}
                    <p className="text-center text-sm mt-4">Or sign in with</p>
                    <div className="flex justify-center gap-4 mt-2">
                        <button className="btn btn-circle btn-outline">
                            <FaFacebookF className="text-xl" />
                        </button>
                        <button onClick={handleGoogle} className="btn btn-circle btn-outline">
                            <FaGoogle className="text-xl" />
                        </button>
                        <button className="btn btn-circle btn-outline">
                            <FaGithub className="text-xl" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;