import { Helmet } from "react-helmet";
import DeshboardBanner from "../../../commonSection/DeshboardBanner";
import myEnrollClass from "../../../assets/myEnrollClass.jpg"


const MyEnrollClass = () => {
    return (
        <div>
            <Helmet>
                <title>SkillFlow  |  All Classes</title>
            </Helmet>
            <DeshboardBanner img={myEnrollClass} title={'My Enroll Class'}></DeshboardBanner>
        </div>
    );
};

export default MyEnrollClass;