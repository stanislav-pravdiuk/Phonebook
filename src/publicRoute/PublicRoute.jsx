import { Navigate, useLocation } from "react-router-dom/dist";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {

    const isAuth = useSelector(state => state.auth.token);
    const {state} = useLocation();

    return !isAuth
        ? children
        : <Navigate to={state ? state : '/'} />
};

export default PublicRoute;