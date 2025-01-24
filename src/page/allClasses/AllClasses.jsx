import { Helmet } from 'react-helmet';
import AllClassesBg from '../../assets/AllClassesBg.jpg'
import BgCover from '../../commonSection/BgCover';
import ClassCart from './ClassCart';

const AllClasses = () => {
    const classData = [
        {
            id: 1,
            title: "World History: Ancient to Modern Times",
            name: "Steve John",
            image:
                "https://cdn.pixabay.com/photo/2022/01/23/18/59/mathematics-6961680_1280.jpg",
            price: "$50.00",
            description: "Explore historical events from ancient to modern times.",
            students: 250,
            category: "Math",
        },
        {
            id: 2,
            title: "Environmental Science and Sustainability",
            name: "Steve Copper",
            image:
                "https://cdn.pixabay.com/photo/2022/01/23/18/59/mathematics-6961680_1280.jpg", 
            price: "$60.00",
            description: "Learn how to protect the environment and its resources.",
            students: 120,
            category: "Math",
        },
        {
            id: 3,
            title: "Modern Physics: Concepts and Applications",
            name: "Rock Land",
            image:
                "https://cdn.pixabay.com/photo/2022/01/23/18/59/mathematics-6961680_1280.jpg",
            price: "$80.00",
            description: "Deep dive into advanced physics concepts.",
            students: 300,
            category: "English",
        },
    ];
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
            <div className="max-w-7xl mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classData.map((classItem) => <ClassCart key={classItem.id} classItem = {classItem}></ClassCart>)}
                </div>
            </div>
        </div>
    );
};

export default AllClasses;