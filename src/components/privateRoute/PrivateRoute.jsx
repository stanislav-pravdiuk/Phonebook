import { Navigate } from "react-router-dom/dist";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {

    const isAuth = useSelector(state => state.auth.token);

    return isAuth
        ? children
        : <Navigate to='/SignIn'/>
};

export default PrivateRoute;