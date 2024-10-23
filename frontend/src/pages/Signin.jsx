import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
export const Signin = () =>{


    const navigate = useNavigate();
    const HandleSignInClick = () =>{
        navigate("/")
    }

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div>
            <h1>Signin PAGE</h1>

            <Button onClick={HandleSignInClick} label={"Home"}/>


        </div>

    </div>
}