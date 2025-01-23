import { Outlet } from "react-router-dom";
import Navbar from "../commonSection/Navbar";
import Footer from "../commonSection/Footer";


const MaignLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MaignLayout;