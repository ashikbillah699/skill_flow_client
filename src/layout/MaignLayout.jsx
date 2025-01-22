import { Outlet } from "react-router-dom";
import Navbar from "../commonSection/Navbar";


const MaignLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MaignLayout;