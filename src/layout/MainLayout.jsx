import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="mt-32">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;
