import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;
