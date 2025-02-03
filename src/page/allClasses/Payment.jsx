import { Helmet } from "react-helmet";
import BgCover from "../../commonSection/BgCover";

const Payment = () => {
    return (
        <div>
             <Helmet
             >
                <title>SkillFlow  |  AllCalsses</title>
            </Helmet>
            <BgCover
                img='https://cdn.pixabay.com/photo/2022/07/06/03/41/business-7304257_1280.jpg'
                title={'Payment'}
                description={'Securely enroll in classes by making a hassle-free payment online!'}
            ></BgCover>
            <h1 className="text-2xl font-bold text-red">this is payment page.</h1>
        </div>
    );
};

export default Payment;