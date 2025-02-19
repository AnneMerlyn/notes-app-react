import { Navigate, useLocation } from "react-router";
import { useUsers } from "../context/context";

const ProtectedRoute = ({ children }) => {
    const {
        userState: { currentUser },
    } = useUsers();
    const location = useLocation();

    if (!currentUser) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;
