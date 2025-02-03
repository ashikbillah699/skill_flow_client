import { Helmet } from "react-helmet";
import useAllClass from "../../../hooks/useAllClass";
import DeshboardBanner from "../../../commonSection/DeshboardBanner";
import tAllReqClassBg from "../../../assets/teacherAllReqClass.jpg"
import { AiOutlineCheck, AiOutlineClose, AiOutlineEye } from "react-icons/ai";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";


const ReqAllClasses = () => {
    const [allClass, refetch] = useAllClass()
    const axiosSecure = useAxiosSecure();
    console.log(allClass)

    // class status Approved
    const handleApprove = async (id) => {
        console.log(id);
        try {
            const { data } = await axiosSecure.patch(`/classStatusApprove/${id}`);
            if (data.modifiedCount > 0) {
                toast.success('Permission for class successfully granted!!🌹');
                refetch()
            }
        }
        catch (err) {
            toast.error(err.message);
        }
    }

    // class status rejected
    const handleReject = async (id) => {
        console.log(id);
        try {
            const { data } = await axiosSecure.patch(`/classStatusReject/${id}`);
            if (data.modifiedCount > 0) {
                toast.success('Permission for class successfully rejected!!🌹');
                refetch()
            }
        }
        catch (err) {
            toast.error(err.message);
        }
    }

    return (
        <div>
            <Helmet>
                <title>SkillFlow  |  All Classes</title>
            </Helmet>
            <DeshboardBanner img={tAllReqClassBg} title={'All Classes'}></DeshboardBanner>
            {
                allClass.length === 0 ? <p className="text-3xl col-span-3 text-center text-green-500">There is no request for a new class.🚩</p>
                    : <>
                        <div className="p-6 min-h-screen flex flex-col gap-4">
                            {allClass.map((cls) => (
                                <div
                                    key={cls._id}
                                    className="flex flex-col gap-6 lg:gap-0 lg:flex-row items-center justify-between  p-4 rounded-xl border border-[#c76f44]"
                                >
                                    <div className="flex items-center gap-4">
                                        <img src={cls.image} alt={cls.title} className="w-20 h-20 rounded-xl" />
                                        <div className="space-y-2">
                                            <h3 className="font-bold">{cls.title}</h3>
                                            <p className="text-sm text-gray-400"> {cls.description.slice(0, 20)}...</p>
                                        </div>
                                    </div>
                                    <div className="hidden lg:block border-l border-[#c76f44] h-10"></div>
                                    <div className="flex flex-col items-center gap-2">
                                        <h3 className="font-bold">{cls.name}</h3>
                                        <span>{cls.email}</span>
                                    </div>
                                    <div className="hidden lg:block border-l border-[#c76f44] h-10"></div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            className="btn btn-primary btn-sm"
                                            disabled={cls.status !== "approved"}
                                        >
                                            <AiOutlineEye className="mr-1" /> View Progress
                                        </button>
                                    </div>
                                    <div className="hidden lg:block border-l border-[#c76f44] h-10"></div>
                                    <div className="flex flex-col gap-2 mt-4 md:mt-0">
                                        <button
                                            disabled={cls.status !== "pending"}
                                            className="btn btn-success btn-sm"
                                            onClick={() => handleApprove(cls._id)}
                                        >
                                            <AiOutlineCheck className="mr-1" /> Approve
                                        </button>
                                        <button
                                            disabled={cls.status !== "pending"}
                                            className="btn btn-error btn-sm"
                                            onClick={() => handleReject(cls._id)}
                                        >
                                            <AiOutlineClose className="mr-1" /> Reject
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
            }
        </div>
    );
};

export default ReqAllClasses;