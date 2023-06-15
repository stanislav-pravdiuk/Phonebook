import { NavLink } from "react-router-dom/dist";
import { useSelector } from "react-redux";

function Header() {

    const { profile } = useSelector((state) => state.auth);

    return (
        <header>
                {profile
                    ? <NavLink to='/profile'>{profile.name}</NavLink>
                    : <NavLink to='/login'>Sign in</NavLink>
                }
                
                {!profile &&
                    <NavLink to='/register'>Sign up</NavLink>
                }
        </header>
    )
};

export default Header;