import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

function Home() {

    const navigate = useNavigate();

    const { isLoggedIn , logout } = useAuth()

    if(!isLoggedIn){
        navigate("/")
    }
    

    return (
        <div>Home
            <button onClick={() => {

            }}>Go to login page</button>

        </div>
    )
}

export default Home