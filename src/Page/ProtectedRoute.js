import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login"></Navigate>
    }

    return children;
}

export default ProtectedRoute;
