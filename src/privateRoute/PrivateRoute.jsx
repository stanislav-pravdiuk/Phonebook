import { Navigate, useLocation } from "react-router-dom/dist";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {

    const isAuth = useSelector(state => state.auth.token);
    const location = useLocation();

    return isAuth
        ? children
        : <Navigate to='/login' state={location} />
};

export default PrivateRoute;