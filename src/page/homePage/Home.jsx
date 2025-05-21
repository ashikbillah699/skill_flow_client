import { Helmet } from "react-helmet";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import CountUCS from "./CountUCS";
import Feedback from "./Feedback";
import InspirTeachers from "./InspirTeachers";
import Partners from "./Partners";
import StudyAids from "./StudyAids";
import HighlightClass from "./HighlightClass";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SkillFlow | Home</title>
            </Helmet>
            <div className="relative lg:mb-40">
                <Banner></Banner>
                <div className="hidden lg:block md:absolute left-0 -bottom-40 z-10  mx-auto w-full">
                    <Partners></Partners>
                </div>
            </div>
            <AboutUs></AboutUs>
            <CountUCS></CountUCS>
            <HighlightClass></HighlightClass>
            <InspirTeachers></InspirTeachers>
            <Feedback></Feedback>
            <StudyAids></StudyAids>
        </div>
    );
};

export default Home;