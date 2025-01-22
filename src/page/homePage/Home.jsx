import Banner from "./Banner";
import Partners from "./Partners";


const Home = () => {
    return (
        <div>
            <div className="relative">
                <Banner></Banner>
            </div>
            <div className="absolute left-40 -bottom-40 z-10">
                <Partners></Partners>
            </div>
        </div>
    );
};

export default Home;