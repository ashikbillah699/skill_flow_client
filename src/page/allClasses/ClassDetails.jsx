import { Helmet } from "react-helmet";
import BgCover from "../../commonSection/BgCover";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ClassDetails = () => {
    const axiosSecure = useAxiosSecure()
    const { id } = useParams();
    // console.log(id)

    const { data: classDetails = {} } = useQuery({
        queryKey: ['classDetails', id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/classDetails/${id}`);
            // console.log(data)
            return data
        }
    });
    console.log(classDetails)

    const { countAssignmnet, description, email, image, name, price, title, _id } = classDetails || '';

    return (
        <div>
            <Helmet>
                <title>SkillFlow  |  AllCalsses</title>
            </Helmet>
            <BgCover
                img={image}
                title={'Class Details'}
                description={'View class progress, enrollments, and assignments, with options to add new assignments!'}
            ></BgCover>
            <div className=" max-w-screen-lg mx-auto p-4">
                {/* Page Title and Overview */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">{title}</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-4 rounded-lg">
                    {/* Left Column: Course Information */}
                    <div className="">
                        <h4 className="font-bold pb-3">Running Assignment({countAssignmnet})</h4>
                        <h2 className="text-xl font-semibold mb-4">Course Description</h2>
                        <p className="mb-4">
                            {description}
                        </p>
                        {/* <h3 className="font-semibold mb-2">What You’ll Learn?</h3>
                        <ul className="list-disc ml-6 mb-4">
                            <li>Nurturing Young Minds</li>
                            <li>Building a Bright Future Together</li>
                            <li>Unlocking Potential Through Education</li>
                        </ul> */}
                    </div>

                    {/* Right Column: Course Details */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <div className="flex justify-between items-center">
                            <img
                                src={image}
                                alt="Instructor"
                                className="w-1/2 rounded-lg object-cover"
                            />
                            <div>
                                <div className="flex flex-col items-end gap-2">
                                    <h4 className="text-lg font-semibold">{name}</h4>
                                    <p className="text-sm text-gray-500">{email}</p>
                                    <h3 className="text-xl font-semibold">Price: ${price}</h3>
                                    <Link to={`/payment/${_id}`} className="btn btn-success">Pay Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;