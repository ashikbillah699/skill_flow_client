import { Helmet } from 'react-helmet';
import AllClassesBg from '../../assets/AllClassesBg.jpg'
import BgCover from '../../commonSection/BgCover';
import ClassCart from './ClassCart';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const AllClasses = () => {
    const axiosPublic = useAxiosPublic();

    const { data: allClass = [], isLoading } = useQuery({
        queryKey: ['allClass'],
        queryFn: async () => {
            const res = await axiosPublic.get('/appAllClass');
            return res.data
        }
    })

    if (isLoading) return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>

    return (
        <div>
            <Helmet>
                <title>SkillFlow  |  AllCalsses</title>
            </Helmet>
            <BgCover
                img={AllClassesBg}
                title={'All Classes'}
                description={'Explore top-notch classes and grow your skills with expert guidance. Start your journey now!'}
            ></BgCover>
            {
                allClass.length === 0 ? <p className="text-3xl col-span-3 text-center text-green-500">No class.🚩</p>
                    : <div className="max-w-screen-xl mx-auto p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {allClass.map((classItem) => <ClassCart key={classItem._id} classItem={classItem}></ClassCart>)}
                        </div>
                    </div>
            }

        </div>
    );
};

export default AllClasses;