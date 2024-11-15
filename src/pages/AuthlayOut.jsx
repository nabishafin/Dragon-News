import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const AuthlayOut = () => {
    return (
        <div className="bg-base-200">
            <header className="">
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthlayOut;