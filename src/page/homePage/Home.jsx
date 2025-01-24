import { Helmet } from "react-helmet";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import CountUCS from "./CountUCS";
import Feedback from "./Feedback";
import InspirTeachers from "./InspirTeachers";
import Partners from "./Partners";
import StudyAids from "./StudyAids";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SkillFlow | Home</title>
            </Helmet>
            <div className="relative xl:mb-40">
                <Banner></Banner>
                <div className=" sm:hidden xl:block md:absolute left-40 -bottom-40 z-10 ">
                    <Partners></Partners>
                </div>
            </div>
            <AboutUs></AboutUs>
            <CountUCS></CountUCS>
            <InspirTeachers></InspirTeachers>
            <Feedback></Feedback>
            <StudyAids></StudyAids>
        </div>
    );
};

export default Home;