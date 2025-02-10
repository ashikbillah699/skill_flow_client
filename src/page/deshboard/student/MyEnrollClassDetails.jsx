import { Helmet } from "react-helmet";
import myEnrollClassDetailsBg from "../../../assets/myEnrollClassDetails.jpg";
import DeshboardBanner from "../../../commonSection/DeshboardBanner";
import { useParams } from "react-router-dom";


const MyEnrollClassDetails = () => {
    const {id} = useParams();
    console.log(id);

    return (
        <div>
            <Helmet>
                <title>SkillFlow  |  Class Details</title>
            </Helmet>
            <DeshboardBanner img={myEnrollClassDetailsBg} title={'My Enroll Class Details'}></DeshboardBanner>
        </div>
    );
};

export default MyEnrollClassDetails;