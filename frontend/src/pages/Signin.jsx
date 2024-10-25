import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";


export const Signin = () =>{

    const navigate = useNavigate();
    const HandleIndexClick = () =>{
        navigate("/")
    }
    const HandleSignUpClick = () =>{
        navigate("/signup")
    }

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div>
            <h1>Signin PAGE</h1>

            <Button onClick={HandleIndexClick} label={"Home"}/>
            <Button onClick={HandleSignUpClick} label={"Sign up"}/>
            
        </div>

    </div>
}