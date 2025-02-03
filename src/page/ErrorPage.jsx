import errorBg from "../assets/errorBg.jpg"

const ErrorPage = () => {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6"
            style={{ backgroundImage: `url(${errorBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <h1 className="text-7xl font-bold text-indigo-600 bg-white bg-opacity-70 px-4 py-2 rounded">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4 bg-white bg-opacity-70 px-4 py-2 rounded">
                The page you were looking for is not found!
            </h2>
            <p className="text-gray-500 mt-2 bg-white bg-opacity-70 px-4 py-2 rounded">
                You may have mistyped the address or the page may have moved.
            </p>
            <button
                className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700 transition"
                onClick={() => window.location.href = "/"}
            >
                Back to Home
            </button>
        </div>
    );
};

export default ErrorPage;