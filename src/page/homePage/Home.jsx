import AboutUs from "./AboutUs";
import Banner from "./Banner";
import CountUCS from "./CountUCS";
import Feedback from "./Feedback";
import InspirTeachers from "./InspirTeachers";
import Partners from "./Partners";


const Home = () => {
    return (
        <div>
            <div className="relative xl:mb-40">
                <Banner></Banner>
                <div className=" sm:hidden xl:block md:absolute left-40 -bottom-40 z-10 ">
                    <Partners></Partners>
                </div>
            </div>
            <CountUCS></CountUCS>
            <InspirTeachers></InspirTeachers>
            <Feedback></Feedback>
            <AboutUs></AboutUs>

        </div>
    );
};

export default Home;