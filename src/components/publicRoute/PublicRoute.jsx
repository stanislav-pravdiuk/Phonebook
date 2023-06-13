import { Navigate } from "react-router-dom/dist";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {

    const isAuth = useSelector(state => state.auth.token);

    return !isAuth
        ? children
        : <Navigate to='/'/>
};

export default PublicRoute;