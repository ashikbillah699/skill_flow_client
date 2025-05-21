import countUCS from '../../assets/countImg.jpg'
import CommonHead from '../../commonSection/CommonHead';
import useAllClass from '../../hooks/useAllClass';
import useEnroll from '../../hooks/useEnroll';
import useUser from '../../hooks/useUser';
// import useTeachOn from '../../hooks/useTeachOn';
const CountUCS = () => {
    // const [teachOn] = useTeachOn()
    const [users] = useUser()
    const [allClass] = useAllClass()
    const [allEnroll] = useEnroll()

    
    console.log(allClass)
    const stats = [
        {
            id: 1,
            title: "Total User",
            count: users.length,
            color: "from-blue-400 to-blue-600",
            icon: "https://img.icons8.com/ios-filled/50/ffffff/user-group-man-man.png",
        },
        {
            id: 2,
            title: "Total classes",
            count: allClass.length,
            color: "from-green-400 to-green-600",
            icon: "https://img.icons8.com/ios-filled/50/ffffff/class.png",
        },
        {
            id: 3,
            title: "Total enrollment",
            count: allEnroll.length,
            color: "from-yellow-400 to-yellow-600",
            icon: "https://img.icons8.com/ios-filled/50/ffffff/open-box.png",
        },
    ];
    return (
        <div className="max-w-screen-xl mx-auto py-10">
            {/* {teachOn.length} */}
            <CommonHead heading={'Our Progress'}></CommonHead>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 items-center">
               
                <div className="grid gap-8 md:gap-5 lg:gap-8">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className={`flex justify-between items-center bg-gradient-to-r ${stat.color} text-white px-4 py-8 md:py-5 lg:py-8 rounded-xl shadow-md`}
                        >
                            <img
                                src={stat.icon}
                                alt={stat.title}
                                className="w-12 h-12"
                            />
                            <h3 className="text-2xl font-medium">{stat.title}</h3>
                            <p className="text-4xl font-bold">{stat.count}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <img
                        src={countUCS}
                        alt="Statistics Illustration"
                        className="w-full  rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default CountUCS;