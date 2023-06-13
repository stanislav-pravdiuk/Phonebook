import { useNavigate } from "react-router-dom/dist";

function GetStarted() {

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => {navigate('/login')}}>Get started</button>
        </div>
    );
};

export default GetStarted;