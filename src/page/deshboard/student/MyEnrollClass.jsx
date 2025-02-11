import { Helmet } from "react-helmet";
import DeshboardBanner from "../../../commonSection/DeshboardBanner";
import myEnrollClass from "../../../assets/myEnrollClass.jpg"
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import MyEnrollClassCart from "./MyEnrollClassCart";


const MyEnrollClass = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const { data: myClasses = [], refetch, isLoading } = useQuery({
        queryKey: ['myClasses', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allEnroll/${user?.email}`);
            // console.log(res.data);
            return res.data;
        }
    })

    refetch()
    if (isLoading) return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>


    return (
        <div>
            <Helmet>
                <title>SkillFlow  |  My Enroll Classes</title>
            </Helmet>
            <DeshboardBanner img={myEnrollClass} title={'My Enroll Class'}></DeshboardBanner>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 p-6">
                {
                    myClasses.map(myClass => <MyEnrollClassCart key={myClass._id} myClass={myClass}></MyEnrollClassCart>)
                }
            </div>


        </div>
    );
};

export default MyEnrollClass;