import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
export const Signup = () =>{


    const navigate = useNavigate();
    const HandleIndexClick = () =>{
        navigate("/")
    }

    const HandleSignInClick = () =>{
        navigate("/signin")
    }

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div>
            <h1>SIGN UP PAGE</h1>

            <Button onClick={HandleSignInClick} label={"Sign in"}/>
            <Button onClick={HandleIndexClick} label={"Home"}/>

        </div>

    </div>
}