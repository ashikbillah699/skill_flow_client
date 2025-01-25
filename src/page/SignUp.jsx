import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import loginImg from '../assets/authentication2 1.png'
import loginBg from '../assets/Rectangle 75.png'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createSignUp, userProfile, googleSignUp } = useContext(AuthContext)
    const navigate = useNavigate()
    const onSubmit = (data) => {
        try {
            createSignUp(data.email, data.password)
                .then(async (result) => {
                    console.log(result.user)
                    userProfile(data?.displayName, data?.photoURL)
                    const userInfo = {
                        name: data?.displayName,
                        email: data?.email,
                        photoURL:data?.photoURL,
                        phoneNumber: data?.phoneNumber,
                        role: 'student'
                    }
                    console.log(userInfo)
                    const res = await axiosPublic.post('/user', userInfo)
                    console.log(res.data)
                    if (res.data.insertedId) {
                        reset()
                        toast.success('successfully sign up')
                        navigate('/')
                    }

                })
                .catch(err => {
                    console.log(err.message)
                    toast.error(err.message)
                    reset()
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
                    userProfile(result.user.displayName, result.user.photoURL)

                    const userInfo = {
                        name: result.user?.displayName,
                        email: result.user?.email,
                        photoURL: result.user?.photoURL,
                        phoneNumber:result.user?.phoneNumber,
                        role: 'student'
                    }

                    const res = await axiosPublic.post('/user', userInfo)
                    console.log(res.data)
                    toast.success('successfully sign up')
                    navigate('/')
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
                <title>SkillFlow | SignUP</title>
            </Helmet>
            <div className="flex shadow-2xl rounded-lg w-full max-w-4xl overflow-hidden" style={{ backgroundImage: `url(${loginBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                {/*Left Side - Form */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-center mb-8">Sign Up</h2>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Name
                            </label>
                            <input
                                {...register("displayName", { required: true })}
                                type="text"
                                placeholder="Type your Full Name"
                                className="input input-bordered w-full"
                                style={{ fontFamily: "Open Sans, sans-serif" }}
                            />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Photo Url
                            </label>
                            <input
                                {...register("photoURL", { required: true })}
                                type="url"
                                placeholder="Type your Full Name"
                                className="input input-bordered w-full"
                                style={{ fontFamily: "Open Sans, sans-serif" }}
                            />
                            {errors.photoURL && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Email
                            </label>
                            <input
                                {...register("email", { required: true })}
                                name="email"
                                type="email"
                                placeholder="Type here"
                                className="input input-bordered w-full"
                                style={{ fontFamily: "Open Sans, sans-serif" }}
                            />
                        </div>
                        {errors.email && <span className="text-red-500">This field is required</span>}

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Phone
                            </label>
                            <input
                                {...register("phoneNumber", { required: true })}
                                name="phoneNumber"
                                type="number"
                                placeholder="Type here"
                                className="input input-bordered w-full"
                                style={{ fontFamily: "Open Sans, sans-serif" }}
                            />
                        </div>
                        {errors.phoneNumber && <span className="text-red-500">This field is required</span>}

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Password
                            </label>
                            <input
                                {...register("password", { required: true, pattern: { value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/ } })}
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                style={{ fontFamily: "Open Sans, sans-serif" }}
                            />
                            {errors.password && <span className="text-red-500">Input must be exactly 6 characters, including both capital and small letters.</span>}
                        </div>


                        {/* Submit Button */}
                        <div>
                            <button className="btn bg-yellow-600 text-white w-full hover:bg-yellow-700">
                                Sign Up
                            </button>
                        </div>
                    </form>

                    {/* New Account */}
                    <p className="text-center text-sm mt-4">
                        Here?{" "}
                        <Link
                            to="/login"
                            className="text-yellow-500 font-medium hover:underline"
                        >
                            if you have an Account.
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
                {/* Right Side - Image */}
                <div className="hidden md:flex md:w-1/2 justify-center items-center" >
                    <img
                        src={loginImg}
                        alt="Login Illustration"
                        className="object-contain max-h-80"
                    />
                </div>
            </div>
        </div>
    );
};

export default SignUp;