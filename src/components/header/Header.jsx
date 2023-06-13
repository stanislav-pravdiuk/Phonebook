import { NavLink, useNavigate } from "react-router-dom/dist";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/slice";
import { delToken } from "services/auth-service";
import { useEffect } from "react";
import { getProfileThunk } from "redux/auth/thunk";

function Header() {

    const { profile, token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = () => {
        navigate('/SignUp')
    };

    const handleLogout = () => {
        dispatch(logOut());
        delToken();
        // запрос на бєк
    };

    useEffect(() => {
        token && dispatch(getProfileThunk())
        console.log(profile)
    }, [token, dispatch]);

    return (
        <header>
            <ul>
                <li>
                    <NavLink to='/'>Phonebook</NavLink>
                </li>
                {profile &&
                    <li>
                        <p>{profile.name}</p>
                    </li>}
                <li>
                    <NavLink to='/SignUp'>Sign up</NavLink>
                </li>
                <li>
                    <NavLink
                        to='/SignIn'
                        onClick={profile ? handleLogout : handleLogin}
                    >
                        {profile ? 'Log out' : 'Sign in'}
                    </NavLink>
                </li>
            </ul>
        </header>
    )
};

export default Header;