import { useNavigate } from "react-router-dom/dist";

function GetStarted() {

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => {navigate('/SignIn')}}>Get started</button>
        </div>
    );
};

export default GetStarted;